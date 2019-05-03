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
import account.StandardAccountManagementService
import logging
from .ttypes import *
from thrift.Thrift import TProcessor
from thrift.transport import TTransport
all_structs = []


class Iface(account.StandardAccountManagementService.Iface):
    def requestLoan(self, loanRequest):
        """
        Parameters:
         - loanRequest

        """
        pass


class Client(account.StandardAccountManagementService.Client, Iface):
    def __init__(self, iprot, oprot=None):
        account.StandardAccountManagementService.Client.__init__(self, iprot, oprot)

    def requestLoan(self, loanRequest):
        """
        Parameters:
         - loanRequest

        """
        self.send_requestLoan(loanRequest)
        return self.recv_requestLoan()

    def send_requestLoan(self, loanRequest):
        self._oprot.writeMessageBegin('requestLoan', TMessageType.CALL, self._seqid)
        args = requestLoan_args()
        args.loanRequest = loanRequest
        args.write(self._oprot)
        self._oprot.writeMessageEnd()
        self._oprot.trans.flush()

    def recv_requestLoan(self):
        iprot = self._iprot
        (fname, mtype, rseqid) = iprot.readMessageBegin()
        if mtype == TMessageType.EXCEPTION:
            x = TApplicationException()
            x.read(iprot)
            iprot.readMessageEnd()
            raise x
        result = requestLoan_result()
        result.read(iprot)
        iprot.readMessageEnd()
        if result.success is not None:
            return result.success
        if result.userDoNotExistException is not None:
            raise result.userDoNotExistException
        if result.invalidPasswordExcpetion is not None:
            raise result.invalidPasswordExcpetion
        if result.currencyNotAvailableException is not None:
            raise result.currencyNotAvailableException
        raise TApplicationException(TApplicationException.MISSING_RESULT, "requestLoan failed: unknown result")


class Processor(account.StandardAccountManagementService.Processor, Iface, TProcessor):
    def __init__(self, handler):
        account.StandardAccountManagementService.Processor.__init__(self, handler)
        self._processMap["requestLoan"] = Processor.process_requestLoan

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

    def process_requestLoan(self, seqid, iprot, oprot):
        args = requestLoan_args()
        args.read(iprot)
        iprot.readMessageEnd()
        result = requestLoan_result()
        try:
            result.success = self._handler.requestLoan(args.loanRequest)
            msg_type = TMessageType.REPLY
        except TTransport.TTransportException:
            raise
        except UserDoNotExistException as userDoNotExistException:
            msg_type = TMessageType.REPLY
            result.userDoNotExistException = userDoNotExistException
        except InvalidPasswordException as invalidPasswordExcpetion:
            msg_type = TMessageType.REPLY
            result.invalidPasswordExcpetion = invalidPasswordExcpetion
        except CurrencyNotAvailableException as currencyNotAvailableException:
            msg_type = TMessageType.REPLY
            result.currencyNotAvailableException = currencyNotAvailableException
        except TApplicationException as ex:
            logging.exception('TApplication exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = ex
        except Exception:
            logging.exception('Unexpected exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = TApplicationException(TApplicationException.INTERNAL_ERROR, 'Internal error')
        oprot.writeMessageBegin("requestLoan", msg_type, seqid)
        result.write(oprot)
        oprot.writeMessageEnd()
        oprot.trans.flush()

# HELPER FUNCTIONS AND STRUCTURES


class requestLoan_args(object):
    """
    Attributes:
     - loanRequest

    """


    def __init__(self, loanRequest=None,):
        self.loanRequest = loanRequest

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
                    self.loanRequest = LoanRequest()
                    self.loanRequest.read(iprot)
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
        oprot.writeStructBegin('requestLoan_args')
        if self.loanRequest is not None:
            oprot.writeFieldBegin('loanRequest', TType.STRUCT, 1)
            self.loanRequest.write(oprot)
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
all_structs.append(requestLoan_args)
requestLoan_args.thrift_spec = (
    None,  # 0
    (1, TType.STRUCT, 'loanRequest', [LoanRequest, None], None, ),  # 1
)


class requestLoan_result(object):
    """
    Attributes:
     - success
     - userDoNotExistException
     - invalidPasswordExcpetion
     - currencyNotAvailableException

    """


    def __init__(self, success=None, userDoNotExistException=None, invalidPasswordExcpetion=None, currencyNotAvailableException=None,):
        self.success = success
        self.userDoNotExistException = userDoNotExistException
        self.invalidPasswordExcpetion = invalidPasswordExcpetion
        self.currencyNotAvailableException = currencyNotAvailableException

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
                    self.success = LoanOffer()
                    self.success.read(iprot)
                else:
                    iprot.skip(ftype)
            elif fid == 1:
                if ftype == TType.STRUCT:
                    self.userDoNotExistException = UserDoNotExistException()
                    self.userDoNotExistException.read(iprot)
                else:
                    iprot.skip(ftype)
            elif fid == 2:
                if ftype == TType.STRUCT:
                    self.invalidPasswordExcpetion = InvalidPasswordException()
                    self.invalidPasswordExcpetion.read(iprot)
                else:
                    iprot.skip(ftype)
            elif fid == 3:
                if ftype == TType.STRUCT:
                    self.currencyNotAvailableException = CurrencyNotAvailableException()
                    self.currencyNotAvailableException.read(iprot)
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
        oprot.writeStructBegin('requestLoan_result')
        if self.success is not None:
            oprot.writeFieldBegin('success', TType.STRUCT, 0)
            self.success.write(oprot)
            oprot.writeFieldEnd()
        if self.userDoNotExistException is not None:
            oprot.writeFieldBegin('userDoNotExistException', TType.STRUCT, 1)
            self.userDoNotExistException.write(oprot)
            oprot.writeFieldEnd()
        if self.invalidPasswordExcpetion is not None:
            oprot.writeFieldBegin('invalidPasswordExcpetion', TType.STRUCT, 2)
            self.invalidPasswordExcpetion.write(oprot)
            oprot.writeFieldEnd()
        if self.currencyNotAvailableException is not None:
            oprot.writeFieldBegin('currencyNotAvailableException', TType.STRUCT, 3)
            self.currencyNotAvailableException.write(oprot)
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
all_structs.append(requestLoan_result)
requestLoan_result.thrift_spec = (
    (0, TType.STRUCT, 'success', [LoanOffer, None], None, ),  # 0
    (1, TType.STRUCT, 'userDoNotExistException', [UserDoNotExistException, None], None, ),  # 1
    (2, TType.STRUCT, 'invalidPasswordExcpetion', [InvalidPasswordException, None], None, ),  # 2
    (3, TType.STRUCT, 'currencyNotAvailableException', [CurrencyNotAvailableException, None], None, ),  # 3
)
fix_spec(all_structs)
del all_structs

