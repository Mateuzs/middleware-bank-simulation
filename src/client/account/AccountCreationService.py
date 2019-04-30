#
# Autogenerated by Thrift Compiler (0.12.0)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TFrozenDict, TException, TApplicationException
from thrift.protocol.TProtocol import TProtocolException
from thrift.TRecursive import fix_spec

import sys
import logging
from .ttypes import *
from thrift.Thrift import TProcessor
from thrift.transport import TTransport
all_structs = []


class Iface(object):
    def createAccount(self, createAccountRequest):
        """
        Parameters:
         - createAccountRequest

        """
        pass


class Client(Iface):
    def __init__(self, iprot, oprot=None):
        self._iprot = self._oprot = iprot
        if oprot is not None:
            self._oprot = oprot
        self._seqid = 0

    def createAccount(self, createAccountRequest):
        """
        Parameters:
         - createAccountRequest

        """
        self.send_createAccount(createAccountRequest)
        return self.recv_createAccount()

    def send_createAccount(self, createAccountRequest):
        self._oprot.writeMessageBegin('createAccount', TMessageType.CALL, self._seqid)
        args = createAccount_args()
        args.createAccountRequest = createAccountRequest
        args.write(self._oprot)
        self._oprot.writeMessageEnd()
        self._oprot.trans.flush()

    def recv_createAccount(self):
        iprot = self._iprot
        (fname, mtype, rseqid) = iprot.readMessageBegin()
        if mtype == TMessageType.EXCEPTION:
            x = TApplicationException()
            x.read(iprot)
            iprot.readMessageEnd()
            raise x
        result = createAccount_result()
        result.read(iprot)
        iprot.readMessageEnd()
        if result.success is not None:
            return result.success
        if result.userAlreadyExistException is not None:
            raise result.userAlreadyExistException
        raise TApplicationException(TApplicationException.MISSING_RESULT, "createAccount failed: unknown result")


class Processor(Iface, TProcessor):
    def __init__(self, handler):
        self._handler = handler
        self._processMap = {}
        self._processMap["createAccount"] = Processor.process_createAccount

    def process(self, iprot, oprot):
        (name, type, seqid) = iprot.readMessageBegin()
        if name not in self._processMap:
            iprot.skip(TType.STRUCT)
            iprot.readMessageEnd()
            x = TApplicationException(TApplicationException.UNKNOWN_METHOD, 'Unknown function %s' % (name))
            oprot.writeMessageBegin(name, TMessageType.EXCEPTION, seqid)
            x.write(oprot)
            oprot.writeMessageEnd()
            oprot.trans.flush()
            return
        else:
            self._processMap[name](self, seqid, iprot, oprot)
        return True

    def process_createAccount(self, seqid, iprot, oprot):
        args = createAccount_args()
        args.read(iprot)
        iprot.readMessageEnd()
        result = createAccount_result()
        try:
            result.success = self._handler.createAccount(args.createAccountRequest)
            msg_type = TMessageType.REPLY
        except TTransport.TTransportException:
            raise
        except UserAlreadyExistException as userAlreadyExistException:
            msg_type = TMessageType.REPLY
            result.userAlreadyExistException = userAlreadyExistException
        except TApplicationException as ex:
            logging.exception('TApplication exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = ex
        except Exception:
            logging.exception('Unexpected exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = TApplicationException(TApplicationException.INTERNAL_ERROR, 'Internal error')
        oprot.writeMessageBegin("createAccount", msg_type, seqid)
        result.write(oprot)
        oprot.writeMessageEnd()
        oprot.trans.flush()

# HELPER FUNCTIONS AND STRUCTURES


class createAccount_args(object):
    """
    Attributes:
     - createAccountRequest

    """


    def __init__(self, createAccountRequest=None,):
        self.createAccountRequest = createAccountRequest

    def read(self, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None:
            iprot._fast_decode(self, iprot, [self.__class__, self.thrift_spec])
            return
        iprot.readStructBegin()
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 1:
                if ftype == TType.STRUCT:
                    self.createAccountRequest = CreateAccountRequest()
                    self.createAccountRequest.read(iprot)
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('createAccount_args')
        if self.createAccountRequest is not None:
            oprot.writeFieldBegin('createAccountRequest', TType.STRUCT, 1)
            self.createAccountRequest.write(oprot)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)
all_structs.append(createAccount_args)
createAccount_args.thrift_spec = (
    None,  # 0
    (1, TType.STRUCT, 'createAccountRequest', [CreateAccountRequest, None], None, ),  # 1
)


class createAccount_result(object):
    """
    Attributes:
     - success
     - userAlreadyExistException

    """


    def __init__(self, success=None, userAlreadyExistException=None,):
        self.success = success
        self.userAlreadyExistException = userAlreadyExistException

    def read(self, iprot):
        if iprot._fast_decode is not None and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None:
            iprot._fast_decode(self, iprot, [self.__class__, self.thrift_spec])
            return
        iprot.readStructBegin()
        while True:
            (fname, ftype, fid) = iprot.readFieldBegin()
            if ftype == TType.STOP:
                break
            if fid == 0:
                if ftype == TType.STRUCT:
                    self.success = AccountCreatedResponse()
                    self.success.read(iprot)
                else:
                    iprot.skip(ftype)
            elif fid == 1:
                if ftype == TType.STRUCT:
                    self.userAlreadyExistException = UserAlreadyExistException()
                    self.userAlreadyExistException.read(iprot)
                else:
                    iprot.skip(ftype)
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('createAccount_result')
        if self.success is not None:
            oprot.writeFieldBegin('success', TType.STRUCT, 0)
            self.success.write(oprot)
            oprot.writeFieldEnd()
        if self.userAlreadyExistException is not None:
            oprot.writeFieldBegin('userAlreadyExistException', TType.STRUCT, 1)
            self.userAlreadyExistException.write(oprot)
            oprot.writeFieldEnd()
        oprot.writeFieldStop()
        oprot.writeStructEnd()

    def validate(self):
        return

    def __repr__(self):
        L = ['%s=%r' % (key, value)
             for key, value in self.__dict__.items()]
        return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

    def __eq__(self, other):
        return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

    def __ne__(self, other):
        return not (self == other)
all_structs.append(createAccount_result)
createAccount_result.thrift_spec = (
    (0, TType.STRUCT, 'success', [AccountCreatedResponse, None], None, ),  # 0
    (1, TType.STRUCT, 'userAlreadyExistException', [UserAlreadyExistException, None], None, ),  # 1
)
fix_spec(all_structs)
del all_structs

