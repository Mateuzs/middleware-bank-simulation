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

struct AuthorisationResponse {
    1: string message,
    2: AccountType accountType,
}

struct Account {
  1: string name,
  2: string surname,
  3: AuthorisationData authorisationData
  4: AccountType accountType
  5: double balance
}

struct LoanRequest{
    1: AuthorisationData authorisationData,
    2: availableCurrencySet currency,
    3: double amount,
    4: i64 monthsPeriod,
}

struct LoanOffer {
    1: availableCurrencySet currency,
    2: double amount,
    3: double costInRequestedCurrency,
    4: double costInNativeCurrency,
    5: double totalAmountToPay,
    6: double installmentInRequestedCurrency,
    7: double installmentInNativeCurrency 
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

service AccountCreationService {
    AccountCreatedResponse createAccount(1: CreateAccountRequest createAccountRequest) throws (1: UserAlreadyExistException userAlreadyExistException),
}

service StandardAccountManagementService {
    AuthorisationResponse authoriseUser(1: AuthorisationData authorisationData) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException invalidPasswordException),
    Account checkAccountState(1: AuthorisationData authorisationData) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException invalidPasswordExcpetion),
}

service PremiumAccountManagenentService extends StandardAccountManagementService {
    LoanOffer requestLoan(1: LoanRequest loanRequest) throws (1: UserDoNotExistException userDoNotExistException, 2: InvalidPasswordException invalidPasswordExcpetion, 3: CurrencyNotAvailableException currencyNotAvailableException)
} 