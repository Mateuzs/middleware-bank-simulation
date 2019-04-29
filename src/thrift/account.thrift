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

struct createAccountRequest {
    1: string name,
    2: string surname,
    3: string pesel,
    4: i64 incomeDeclaration,
}

struct AccountCreatedResponse {
    1: string success
    2: string password
}

exception userDoNotExist {
    string pesel,
    string message
}

exception userAlreadyExist {
    string pesel,
    string message
}

exception InvalidPassword {
    string pesel,
    string message
}

service AccountMaintenance{
    User createUser(1: createUserRequest) throws userAlreadyExist,


}