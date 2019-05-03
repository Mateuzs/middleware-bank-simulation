import argparse
import hashlib

from thrift.protocol import TBinaryProtocol
from thrift.protocol.TMultiplexedProtocol import TMultiplexedProtocol
from thrift.transport import TTransport
from thrift.transport import TSocket
from thrift import Thrift

from account import AccountCreationService
from account import StandardAccountManagementService
from account import PremiumAccountManagenentService
from account import ttypes

accountType = ttypes.AccountType


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--ac_bank_port", type=int, required=True)
    parser.add_argument("--am_bank_port", type=int, required=True)

    parsed_args = parser.parse_args()

    ac_transport = TTransport.TBufferedTransport(
        TSocket.TSocket('localhost', parsed_args.ac_bank_port))

    am_transport = TTransport.TBufferedTransport(
        TSocket.TSocket('localhost', parsed_args.am_bank_port))

    ac_transport.open()
    am_transport.open()

    protocol = TBinaryProtocol.TBinaryProtocol(ac_transport)
    protocol2 = TBinaryProtocol.TBinaryProtocol(am_transport)

    account_management = AccountCreationService.Client(protocol)
    standard_management = StandardAccountManagementService.Client(
        TMultiplexedProtocol(protocol2, "StandardAccountManagementService"))
    premium_management = PremiumAccountManagenentService.Client(
        TMultiplexedProtocol(protocol2, "PremiumAccountManagenentService"))

    print("Client started...")

    while True:
        try:

            iinput = input("\nWelcome in the bank service, you can: \n\n"
                           "C - create account \n"
                           "L - login into the bank \n"
                           "Q - leave the service\n")

            if iinput == "Q":
                break
            elif iinput == "C":
                create_account(account_management)
            elif iinput == "L":
                login(standard_management, premium_management)
            else:
                print("Invalid argument")
        except ttypes.UserDoNotExistException as exception:
            print('\nError! ' + exception.message +
                  ' pesel: ' + exception.pesel)

        except ttypes.InvalidPasswordException as exception:
            print('\nError! ' + exception.message +
                  ' pesel: ' + exception.pesel)

        except ttypes.UserAlreadyExistException as exception:
            print('\nError! ' + exception.message +
                  ' pesel: ' + exception.pesel)

    ac_transport.close()
    am_transport.close()


def login(standard_management, premium_management):
    authorisationData = ttypes.AuthorisationData()
    authorisationData.pesel = input("pesel: ")
    authorisationData.password = computeMD5hash(input("password: "))

    bank_response = standard_management.authoriseUser(authorisationData)
    print("\n", bank_response.message)

    if(bank_response.accountType == accountType.STANDARD):
        while True:
            iinput = input("\nAs an standard bank client, you can: \n\n"
                           "B - check account state \n"
                           "Q - leave the service\n")

            if iinput == "Q":
                break
            elif iinput == "B":
                check_account(authorisationData, standard_management)
            else:
                print("Invalid argument")

    elif(bank_response.accountType == accountType.PREMIUM):
        while True:
            iinput = input("\nAs an premium bank client, you can: \n\n"
                           "B - check account state \n"
                           "L - request a loan \n"
                           "Q - leave the service\n")

            if iinput == "Q":
                break
            elif iinput == "B":
                check_account(authorisationData, premium_management)
            elif iinput == "L":
                try:
                    loan_request(authorisationData, premium_management)
                except ttypes.CurrencyNotAvailableException as exception:
                    print("\n", exception.message)
        else:
            print("Invalid argument")

    else:
        print("Internal error - 500")


def check_account(authorisationData, management):
    bank_response = management.checkAccountState(authorisationData)
    print("\nYour current account state: ")
    print("name: ", bank_response.name)
    print("surname: ", bank_response.surname)
    print("AuthData: ", bank_response.authorisationData)
    print("balance: ", bank_response.balance)
    if bank_response.accountType == accountType.STANDARD:
        print("AccountType: STANDARD")
    else:
        print("AccountType: PREMIUM")


def create_account(account_management):
    print("\nlet's create an account!")

    account_request = ttypes.CreateAccountRequest()

    account_request.name = input("name? : ")
    account_request.surname = input("surname? : ")
    account_request.pesel = input("pesel? : ")
    account_request.incomeDeclaration = float(input("income? : "))

    bank_response = account_management.createAccount(account_request)

    print(bank_response.confirmationMessage)
    print("password: ", bank_response.password)


def loan_request(authorisationData, premium_management):
    loan_request = ttypes.LoanRequest()
    loan_request.authorisationData = authorisationData
    currency = input("currency?: ")

    if currency == 'PLN':
        loan_request.currency = ttypes.availableCurrencySet.PLN
    elif currency == 'EUR':
        loan_request.currency = ttypes.availableCurrencySet.EUR
    elif currency == 'USD':
        loan_request.currency = ttypes.availableCurrencySet.USD
    elif currency == 'GBP':
        loan_request.currency = ttypes.availableCurrencySet.GBP
    elif currency == 'HUF':
        loan_request.currency = ttypes.availableCurrencySet.HUF
    elif currency == 'JPY':
        loan_request.currency = ttypes.availableCurrencySet.JPY
    else:
        print("Wrong currency identifier!")

    loan_request.amount = float(input("amount?: "))
    loan_request.monthsPeriod = int(input("monthsPeriod?: "), 10)

    bank_response = premium_management.requestLoan(loan_request)

    print("\ncost in requested currency:  ",
          bank_response.costInRequestedCurrency)
    print("cost in native currency: ", bank_response.costInNativeCurrency)
    print("total amount to pay: ", bank_response.totalAmountToPay)
    print("installment in requested currency: ",
          bank_response.installmentInRequestedCurrency)
    print("installment in native currency: ",
          bank_response.installmentInNativeCurrency)


def computeMD5hash(my_string):
    m = hashlib.md5()
    m.update(my_string.encode('utf-8'))
    return m.hexdigest()


main()
