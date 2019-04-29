enum AccountType{
    STANDARD,
    PREMIUM
}

struct Account {
  1: string name,
  2: string surname,
  3: string pesel,
  4: string password,
  5: AccountType accountType
  6: i64 balance
}

struct CreateAccountRequest {
    1: string name,
    2: string surname,
    3: string pesel,
    4: i64 incomeDeclaration,
}

struct AccountCreatedResponse {
    1: string success
    2: string password
}

struct AuthorisationData {
    1: string pesel,
    2: string password, 
}

exception UserDoNotExist {
   1: string pesel,
   2: string message
}

exception UserAlreadyExist {
   1: string pesel,
   2: string message
}

exception InvalidPassword {
   1: string pesel,
   2: string message
}

service AccountCreationService{
    AccountCreatedResponse createAccount(1: CreateAccountRequest createAccountRequest) throws (1: UserAlreadyExist error),
}

service PremiumAccountManagenent{
} 

service StandardAccountManagement {
    Account checkAccountState(1: AuthorisationData authorisationData) throws (1: UserDoNotExist userDoNotExistError, 2: InvalidPassword invalidPassworderror),
}