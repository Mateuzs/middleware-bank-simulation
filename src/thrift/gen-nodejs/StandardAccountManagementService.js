//
// Autogenerated by Thrift Compiler (0.12.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./account_types');
//HELPER FUNCTIONS AND STRUCTURES

var StandardAccountManagementService_authoriseUser_args = function(args) {
  this.authorisationData = null;
  if (args) {
    if (args.authorisationData !== undefined && args.authorisationData !== null) {
      this.authorisationData = new ttypes.AuthorisationData(args.authorisationData);
    }
  }
};
StandardAccountManagementService_authoriseUser_args.prototype = {};
StandardAccountManagementService_authoriseUser_args.prototype.read = function(input) {
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
        this.authorisationData = new ttypes.AuthorisationData();
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

StandardAccountManagementService_authoriseUser_args.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagementService_authoriseUser_args');
  if (this.authorisationData !== null && this.authorisationData !== undefined) {
    output.writeFieldBegin('authorisationData', Thrift.Type.STRUCT, 1);
    this.authorisationData.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StandardAccountManagementService_authoriseUser_result = function(args) {
  this.success = null;
  this.userDoNotExistException = null;
  this.invalidPasswordException = null;
  if (args instanceof ttypes.UserDoNotExistException) {
    this.userDoNotExistException = args;
    return;
  }
  if (args instanceof ttypes.InvalidPasswordException) {
    this.invalidPasswordException = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.AuthorisationResponse(args.success);
    }
    if (args.userDoNotExistException !== undefined && args.userDoNotExistException !== null) {
      this.userDoNotExistException = args.userDoNotExistException;
    }
    if (args.invalidPasswordException !== undefined && args.invalidPasswordException !== null) {
      this.invalidPasswordException = args.invalidPasswordException;
    }
  }
};
StandardAccountManagementService_authoriseUser_result.prototype = {};
StandardAccountManagementService_authoriseUser_result.prototype.read = function(input) {
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
        this.success = new ttypes.AuthorisationResponse();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.userDoNotExistException = new ttypes.UserDoNotExistException();
        this.userDoNotExistException.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.invalidPasswordException = new ttypes.InvalidPasswordException();
        this.invalidPasswordException.read(input);
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

StandardAccountManagementService_authoriseUser_result.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagementService_authoriseUser_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.userDoNotExistException !== null && this.userDoNotExistException !== undefined) {
    output.writeFieldBegin('userDoNotExistException', Thrift.Type.STRUCT, 1);
    this.userDoNotExistException.write(output);
    output.writeFieldEnd();
  }
  if (this.invalidPasswordException !== null && this.invalidPasswordException !== undefined) {
    output.writeFieldBegin('invalidPasswordException', Thrift.Type.STRUCT, 2);
    this.invalidPasswordException.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StandardAccountManagementService_checkAccountState_args = function(args) {
  this.authorisationData = null;
  if (args) {
    if (args.authorisationData !== undefined && args.authorisationData !== null) {
      this.authorisationData = new ttypes.AuthorisationData(args.authorisationData);
    }
  }
};
StandardAccountManagementService_checkAccountState_args.prototype = {};
StandardAccountManagementService_checkAccountState_args.prototype.read = function(input) {
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
        this.authorisationData = new ttypes.AuthorisationData();
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

StandardAccountManagementService_checkAccountState_args.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagementService_checkAccountState_args');
  if (this.authorisationData !== null && this.authorisationData !== undefined) {
    output.writeFieldBegin('authorisationData', Thrift.Type.STRUCT, 1);
    this.authorisationData.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StandardAccountManagementService_checkAccountState_result = function(args) {
  this.success = null;
  this.userDoNotExistException = null;
  this.invalidPasswordExcpetion = null;
  if (args instanceof ttypes.UserDoNotExistException) {
    this.userDoNotExistException = args;
    return;
  }
  if (args instanceof ttypes.InvalidPasswordException) {
    this.invalidPasswordExcpetion = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Account(args.success);
    }
    if (args.userDoNotExistException !== undefined && args.userDoNotExistException !== null) {
      this.userDoNotExistException = args.userDoNotExistException;
    }
    if (args.invalidPasswordExcpetion !== undefined && args.invalidPasswordExcpetion !== null) {
      this.invalidPasswordExcpetion = args.invalidPasswordExcpetion;
    }
  }
};
StandardAccountManagementService_checkAccountState_result.prototype = {};
StandardAccountManagementService_checkAccountState_result.prototype.read = function(input) {
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
        this.success = new ttypes.Account();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.userDoNotExistException = new ttypes.UserDoNotExistException();
        this.userDoNotExistException.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.invalidPasswordExcpetion = new ttypes.InvalidPasswordException();
        this.invalidPasswordExcpetion.read(input);
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

StandardAccountManagementService_checkAccountState_result.prototype.write = function(output) {
  output.writeStructBegin('StandardAccountManagementService_checkAccountState_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.userDoNotExistException !== null && this.userDoNotExistException !== undefined) {
    output.writeFieldBegin('userDoNotExistException', Thrift.Type.STRUCT, 1);
    this.userDoNotExistException.write(output);
    output.writeFieldEnd();
  }
  if (this.invalidPasswordExcpetion !== null && this.invalidPasswordExcpetion !== undefined) {
    output.writeFieldBegin('invalidPasswordExcpetion', Thrift.Type.STRUCT, 2);
    this.invalidPasswordExcpetion.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var StandardAccountManagementServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
StandardAccountManagementServiceClient.prototype = {};
StandardAccountManagementServiceClient.prototype.seqid = function() { return this._seqid; };
StandardAccountManagementServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

StandardAccountManagementServiceClient.prototype.authoriseUser = function(authorisationData, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_authoriseUser(authorisationData);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_authoriseUser(authorisationData);
  }
};

StandardAccountManagementServiceClient.prototype.send_authoriseUser = function(authorisationData) {
  var output = new this.pClass(this.output);
  var params = {
    authorisationData: authorisationData
  };
  var args = new StandardAccountManagementService_authoriseUser_args(params);
  try {
    output.writeMessageBegin('authoriseUser', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

StandardAccountManagementServiceClient.prototype.recv_authoriseUser = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new StandardAccountManagementService_authoriseUser_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.userDoNotExistException) {
    return callback(result.userDoNotExistException);
  }
  if (null !== result.invalidPasswordException) {
    return callback(result.invalidPasswordException);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('authoriseUser failed: unknown result');
};

StandardAccountManagementServiceClient.prototype.checkAccountState = function(authorisationData, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_checkAccountState(authorisationData);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_checkAccountState(authorisationData);
  }
};

StandardAccountManagementServiceClient.prototype.send_checkAccountState = function(authorisationData) {
  var output = new this.pClass(this.output);
  var params = {
    authorisationData: authorisationData
  };
  var args = new StandardAccountManagementService_checkAccountState_args(params);
  try {
    output.writeMessageBegin('checkAccountState', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

StandardAccountManagementServiceClient.prototype.recv_checkAccountState = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new StandardAccountManagementService_checkAccountState_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.userDoNotExistException) {
    return callback(result.userDoNotExistException);
  }
  if (null !== result.invalidPasswordExcpetion) {
    return callback(result.invalidPasswordExcpetion);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('checkAccountState failed: unknown result');
};
var StandardAccountManagementServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
StandardAccountManagementServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
StandardAccountManagementServiceProcessor.prototype.process_authoriseUser = function(seqid, input, output) {
  var args = new StandardAccountManagementService_authoriseUser_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.authoriseUser.length === 1) {
    Q.fcall(this._handler.authoriseUser.bind(this._handler),
      args.authorisationData
    ).then(function(result) {
      var result_obj = new StandardAccountManagementService_authoriseUser_result({success: result});
      output.writeMessageBegin("authoriseUser", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.UserDoNotExistException || err instanceof ttypes.InvalidPasswordException) {
        result = new StandardAccountManagementService_authoriseUser_result(err);
        output.writeMessageBegin("authoriseUser", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("authoriseUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.authoriseUser(args.authorisationData, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UserDoNotExistException || err instanceof ttypes.InvalidPasswordException) {
        result_obj = new StandardAccountManagementService_authoriseUser_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("authoriseUser", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("authoriseUser", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
StandardAccountManagementServiceProcessor.prototype.process_checkAccountState = function(seqid, input, output) {
  var args = new StandardAccountManagementService_checkAccountState_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.checkAccountState.length === 1) {
    Q.fcall(this._handler.checkAccountState.bind(this._handler),
      args.authorisationData
    ).then(function(result) {
      var result_obj = new StandardAccountManagementService_checkAccountState_result({success: result});
      output.writeMessageBegin("checkAccountState", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.UserDoNotExistException || err instanceof ttypes.InvalidPasswordException) {
        result = new StandardAccountManagementService_checkAccountState_result(err);
        output.writeMessageBegin("checkAccountState", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("checkAccountState", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.checkAccountState(args.authorisationData, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UserDoNotExistException || err instanceof ttypes.InvalidPasswordException) {
        result_obj = new StandardAccountManagementService_checkAccountState_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("checkAccountState", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("checkAccountState", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
