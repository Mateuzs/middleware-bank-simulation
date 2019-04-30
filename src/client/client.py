from thrift.protocol import TBinaryProtocol
from thrift.transport import TTransport
from thrift.transport import TSocket
from thrift import Thrift

from account import AccountCreationService
from account import StandardAccountManagementService
from account import PremiumAccountManagenentService
from account import ttypes

accountType = ttypes.AccountType


def main():

    name = 'Mat'
    surname = 'Zem'
    pesel = '123456'
    incomeDeclaration = 3000
    password = ''

    createAccountRequest = ttypes.CreateAccountRequest()
    createAccountRequest.name = name
    createAccountRequest.surname = surname
    createAccountRequest.pesel = pesel
    createAccountRequest.incomeDeclaration = incomeDeclaration

    try:
        transport = TSocket.TSocket('localhost', 9001)
        transport = TTransport.TBufferedTransport(transport)
        transport.open()

        protocol = TBinaryProtocol.TBinaryProtocol(transport)
        client = AccountCreationService.Client(protocol)

        response = client.createAccount(createAccountRequest)
        print(response)
        transport.close()
        if response.accountType == accountType.STANDARD:
            try:
                password = response.password

                authorisationData = ttypes.AuthorisationData()
                authorisationData.pesel = pesel
                authorisationData.password = password
                transport = TSocket.TSocket('localhost', 9002)
                transport = TTransport.TBufferedTransport(transport)
                transport.open()

                protocol = TBinaryProtocol.TBinaryProtocol(transport)
                client = StandardAccountManagementService.Client(protocol)
                response = client.checkAccountState(
                    authorisationData)
                print(response)

                transport.close()

            except ttypes.InvalidPasswordException as exception:
                print('user ' + exception.pesel + ' ' + exception.message)
                transport.close()

        else:
            print('nothing')

    except ttypes.UserAlreadyExistException as exception:
        print('Error! ' + exception.message + ' pesel: ' + exception.pesel)
        transport.close()


main()
