//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

StandardAccountManagement_checkAccountState_args = function(args) {
  this.authorisationData = null;
  if (args) {
    if (args.authorisationData !== undefined && args.authorisationData !== null) {
      this.authorisationData = new AuthorisationData(args.authorisationData);
    }
  }
};
StandardAccountManagement_checkAccountState_args.prototype = {};
StandardAccountManagement_checkAccountState_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.authorisationData = new AuthorisationData();
        this.authorisationData.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

StandardAccountManagement_checkAccountState_args.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagement_checkAccountState_args');
  if (this.authorisationData !== null && this.authorisationData !== undefined) {
    output.writeFieldBegin('authorisationData', Thrift.Type.STRUCT, 1);
    this.authorisationData.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

StandardAccountManagement_checkAccountState_result = function(args) {
  this.success = null;
  this.userDoNotExistError = null;
  this.invalidPassworderror = null;
  if (args instanceof UserDoNotExist) {
    this.userDoNotExistError = args;
    return;
  }
  if (args instanceof InvalidPassword) {
    this.invalidPassworderror = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new Account(args.success);
    }
    if (args.userDoNotExistError !== undefined && args.userDoNotExistError !== null) {
      this.userDoNotExistError = args.userDoNotExistError;
    }
    if (args.invalidPassworderror !== undefined && args.invalidPassworderror !== null) {
      this.invalidPassworderror = args.invalidPassworderror;
    }
  }
};
StandardAccountManagement_checkAccountState_result.prototype = {};
StandardAccountManagement_checkAccountState_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new Account();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.userDoNotExistError = new UserDoNotExist();
        this.userDoNotExistError.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.invalidPassworderror = new InvalidPassword();
        this.invalidPassworderror.read(input);
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

StandardAccountManagement_checkAccountState_result.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagement_checkAccountState_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.userDoNotExistError !== null && this.userDoNotExistError !== undefined) {
    output.writeFieldBegin('userDoNotExistError', Thrift.Type.STRUCT, 1);
    this.userDoNotExistError.write(output);
    output.writeFieldEnd();
  }
  if (this.invalidPassworderror !== null && this.invalidPassworderror !== undefined) {
    output.writeFieldBegin('invalidPassworderror', Thrift.Type.STRUCT, 2);
    this.invalidPassworderror.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

StandardAccountManagementClient = function(input, output) {
  this.input = input;
  this.output = (!output) ? input : output;
  this.seqid = 0;
};
StandardAccountManagementClient.prototype = {};

StandardAccountManagementClient.prototype.checkAccountState = function(authorisationData, callback) {
  this.send_checkAccountState(authorisationData, callback); 
  if (!callback) {
    return this.recv_checkAccountState();
  }
};

StandardAccountManagementClient.prototype.send_checkAccountState = function(authorisationData, callback) {
  var params = {
    authorisationData: authorisationData
  };
  var args = new StandardAccountManagement_checkAccountState_args(params);
  try {
    this.output.writeMessageBegin('checkAccountState', Thrift.MessageType.CALL, this.seqid);
    args.write(this.output);
    this.output.writeMessageEnd();
    if (callback) {
      var self = this;
      this.output.getTransport().flush(true, function() {
        var result = null;
        try {
          result = self.recv_checkAccountState();
        } catch (e) {
          result = e;
        }
        callback(result);
      });
    } else {
      return this.output.getTransport().flush();
    }
  }
  catch (e) {
    if (typeof this.output.getTransport().reset === 'function') {
      this.output.getTransport().reset();
    }
    throw e;
  }
};

StandardAccountManagementClient.prototype.recv_checkAccountState = function() {
  var ret = this.input.readMessageBegin();
  var mtype = ret.mtype;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new StandardAccountManagement_checkAccountState_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.userDoNotExistError) {
    throw result.userDoNotExistError;
  }
  if (null !== result.invalidPassworderror) {
    throw result.invalidPassworderror;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'checkAccountState failed: unknown result';
};