enum AccountType{
    STANDARD,
    PREMIUM
}

enum availableCurrencySet {
    PLN,
    EUR,
    USD,
    GBP,
    HUF,
    JPY,
}

struct Account {
  1: string name,
  2: string surname,
  3: string pesel,
  4: string password,
  5: AccountType accountType
  6: double balance
}

struct CreateAccountRequest {
    1: string name,
    2: string surname,
    3: string pesel,
    4: double incomeDeclaration,
}

struct AccountCreatedResponse {
    1: string confirmationMessage
    2: string password
    3: AccountType accountType
}

struct AuthorisationData {
    1: string pesel,
    2: string password, 
}

struct LoanRequest{
    1: string pesel,
    2: string password, 
    3: availableCurrencySet currency,
    4: double amount,
    5: i64 monthsPeriod,
}

struct LoanOffer {
    1: availableCurrencySet currency,
    2: double amount,
    3: double constInRequestedCurrency,
    4: double costInNativeCurrency,
    5: double totalAmountToPay,
    6: double installment 
}

exception CurrencyNotAvailableException {
    1: availableCurrencySet currency,
    2: string message,
}


exception UserDoNotExistException {
   1: string pesel,
   2: string message
}

exception UserAlreadyExistException {
   1: string pesel,
   2: string message
}

exception InvalidPasswordException {
   1: string pesel,
   2: string message
}

service AccountCreationService{
    AccountCreatedResponse createAccount(1: CreateAccountRequest createAccountRequest) throws (1: UserAlreadyExistException userAlreadyExistException),
}

service PremiumAccountManagenentService{
    Account checkAccountState(1: AuthorisationData authorisationData) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException InvalidPasswordException),
    LoanOffer requestLoan(1: LoanRequest loanRequest) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException invalidPasswordExcpetion, 3: CurrencyNotAvailableException currencyNotAvailableException)
} 

service StandardAccountManagementService {
    Account checkAccountState(1: AuthorisationData authorisationData) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException invalidPasswordExcpetion),
}