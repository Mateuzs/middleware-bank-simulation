//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


AccountType = {
  'STANDARD' : 0,
  'PREMIUM' : 1
};
Account = function(args) {
  this.name = null;
  this.surname = null;
  this.pesel = null;
  this.password = null;
  this.accountType = null;
  this.balance = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.surname !== undefined && args.surname !== null) {
      this.surname = args.surname;
    }
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
    if (args.accountType !== undefined && args.accountType !== null) {
      this.accountType = args.accountType;
    }
    if (args.balance !== undefined && args.balance !== null) {
      this.balance = args.balance;
    }
  }
};
Account.prototype = {};
Account.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.surname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.accountType = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.balance = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Account.prototype.write = function(output) {
  output.writeStructBegin('Account');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.surname !== null && this.surname !== undefined) {
    output.writeFieldBegin('surname', Thrift.Type.STRING, 2);
    output.writeString(this.surname);
    output.writeFieldEnd();
  }
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 3);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 4);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  if (this.accountType !== null && this.accountType !== undefined) {
    output.writeFieldBegin('accountType', Thrift.Type.I32, 5);
    output.writeI32(this.accountType);
    output.writeFieldEnd();
  }
  if (this.balance !== null && this.balance !== undefined) {
    output.writeFieldBegin('balance', Thrift.Type.I64, 6);
    output.writeI64(this.balance);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

CreateAccountRequest = function(args) {
  this.name = null;
  this.surname = null;
  this.pesel = null;
  this.incomeDeclaration = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.surname !== undefined && args.surname !== null) {
      this.surname = args.surname;
    }
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.incomeDeclaration !== undefined && args.incomeDeclaration !== null) {
      this.incomeDeclaration = args.incomeDeclaration;
    }
  }
};
CreateAccountRequest.prototype = {};
CreateAccountRequest.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.surname = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.incomeDeclaration = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CreateAccountRequest.prototype.write = function(output) {
  output.writeStructBegin('CreateAccountRequest');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.surname !== null && this.surname !== undefined) {
    output.writeFieldBegin('surname', Thrift.Type.STRING, 2);
    output.writeString(this.surname);
    output.writeFieldEnd();
  }
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 3);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.incomeDeclaration !== null && this.incomeDeclaration !== undefined) {
    output.writeFieldBegin('incomeDeclaration', Thrift.Type.I64, 4);
    output.writeI64(this.incomeDeclaration);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AccountCreatedResponse = function(args) {
  this.success = null;
  this.password = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
AccountCreatedResponse.prototype = {};
AccountCreatedResponse.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AccountCreatedResponse.prototype.write = function(output) {
  output.writeStructBegin('AccountCreatedResponse');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 1);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthorisationData = function(args) {
  this.pesel = null;
  this.password = null;
  if (args) {
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
AuthorisationData.prototype = {};
AuthorisationData.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AuthorisationData.prototype.write = function(output) {
  output.writeStructBegin('AuthorisationData');
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 1);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 2);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserDoNotExist = function(args) {
  this.pesel = null;
  this.message = null;
  if (args) {
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(UserDoNotExist, Thrift.TException);
UserDoNotExist.prototype.name = 'UserDoNotExist';
UserDoNotExist.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserDoNotExist.prototype.write = function(output) {
  output.writeStructBegin('UserDoNotExist');
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 1);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

UserAlreadyExist = function(args) {
  this.pesel = null;
  this.message = null;
  if (args) {
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(UserAlreadyExist, Thrift.TException);
UserAlreadyExist.prototype.name = 'UserAlreadyExist';
UserAlreadyExist.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

UserAlreadyExist.prototype.write = function(output) {
  output.writeStructBegin('UserAlreadyExist');
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 1);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

InvalidPassword = function(args) {
  this.pesel = null;
  this.message = null;
  if (args) {
    if (args.pesel !== undefined && args.pesel !== null) {
      this.pesel = args.pesel;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(InvalidPassword, Thrift.TException);
InvalidPassword.prototype.name = 'InvalidPassword';
InvalidPassword.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.pesel = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

InvalidPassword.prototype.write = function(output) {
  output.writeStructBegin('InvalidPassword');
  if (this.pesel !== null && this.pesel !== undefined) {
    output.writeFieldBegin('pesel', Thrift.Type.STRING, 1);
    output.writeString(this.pesel);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

