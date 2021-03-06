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
    def authoriseUser(self, authorisationData):
        """
        Parameters:
         - authorisationData

        """
        pass

    def checkAccountState(self, authorisationData):
        """
        Parameters:
         - authorisationData

        """
        pass


class Client(Iface):
    def __init__(self, iprot, oprot=None):
        self._iprot = self._oprot = iprot
        if oprot is not None:
            self._oprot = oprot
        self._seqid = 0

    def authoriseUser(self, authorisationData):
        """
        Parameters:
         - authorisationData

        """
        self.send_authoriseUser(authorisationData)
        return self.recv_authoriseUser()

    def send_authoriseUser(self, authorisationData):
        self._oprot.writeMessageBegin('authoriseUser', TMessageType.CALL, self._seqid)
        args = authoriseUser_args()
        args.authorisationData = authorisationData
        args.write(self._oprot)
        self._oprot.writeMessageEnd()
        self._oprot.trans.flush()

    def recv_authoriseUser(self):
        iprot = self._iprot
        (fname, mtype, rseqid) = iprot.readMessageBegin()
        if mtype == TMessageType.EXCEPTION:
            x = TApplicationException()
            x.read(iprot)
            iprot.readMessageEnd()
            raise x
        result = authoriseUser_result()
        result.read(iprot)
        iprot.readMessageEnd()
        if result.success is not None:
            return result.success
        if result.userDoNotExistException is not None:
            raise result.userDoNotExistException
        if result.invalidPasswordException is not None:
            raise result.invalidPasswordException
        raise TApplicationException(TApplicationException.MISSING_RESULT, "authoriseUser failed: unknown result")

    def checkAccountState(self, authorisationData):
        """
        Parameters:
         - authorisationData

        """
        self.send_checkAccountState(authorisationData)
        return self.recv_checkAccountState()

    def send_checkAccountState(self, authorisationData):
        self._oprot.writeMessageBegin('checkAccountState', TMessageType.CALL, self._seqid)
        args = checkAccountState_args()
        args.authorisationData = authorisationData
        args.write(self._oprot)
        self._oprot.writeMessageEnd()
        self._oprot.trans.flush()

    def recv_checkAccountState(self):
        iprot = self._iprot
        (fname, mtype, rseqid) = iprot.readMessageBegin()
        if mtype == TMessageType.EXCEPTION:
            x = TApplicationException()
            x.read(iprot)
            iprot.readMessageEnd()
            raise x
        result = checkAccountState_result()
        result.read(iprot)
        iprot.readMessageEnd()
        if result.success is not None:
            return result.success
        if result.userDoNotExistException is not None:
            raise result.userDoNotExistException
        if result.invalidPasswordExcpetion is not None:
            raise result.invalidPasswordExcpetion
        raise TApplicationException(TApplicationException.MISSING_RESULT, "checkAccountState failed: unknown result")


class Processor(Iface, TProcessor):
    def __init__(self, handler):
        self._handler = handler
        self._processMap = {}
        self._processMap["authoriseUser"] = Processor.process_authoriseUser
        self._processMap["checkAccountState"] = Processor.process_checkAccountState

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

    def process_authoriseUser(self, seqid, iprot, oprot):
        args = authoriseUser_args()
        args.read(iprot)
        iprot.readMessageEnd()
        result = authoriseUser_result()
        try:
            result.success = self._handler.authoriseUser(args.authorisationData)
            msg_type = TMessageType.REPLY
        except TTransport.TTransportException:
            raise
        except UserDoNotExistException as userDoNotExistException:
            msg_type = TMessageType.REPLY
            result.userDoNotExistException = userDoNotExistException
        except InvalidPasswordException as invalidPasswordException:
            msg_type = TMessageType.REPLY
            result.invalidPasswordException = invalidPasswordException
        except TApplicationException as ex:
            logging.exception('TApplication exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = ex
        except Exception:
            logging.exception('Unexpected exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = TApplicationException(TApplicationException.INTERNAL_ERROR, 'Internal error')
        oprot.writeMessageBegin("authoriseUser", msg_type, seqid)
        result.write(oprot)
        oprot.writeMessageEnd()
        oprot.trans.flush()

    def process_checkAccountState(self, seqid, iprot, oprot):
        args = checkAccountState_args()
        args.read(iprot)
        iprot.readMessageEnd()
        result = checkAccountState_result()
        try:
            result.success = self._handler.checkAccountState(args.authorisationData)
            msg_type = TMessageType.REPLY
        except TTransport.TTransportException:
            raise
        except UserDoNotExistException as userDoNotExistException:
            msg_type = TMessageType.REPLY
            result.userDoNotExistException = userDoNotExistException
        except InvalidPasswordException as invalidPasswordExcpetion:
            msg_type = TMessageType.REPLY
            result.invalidPasswordExcpetion = invalidPasswordExcpetion
        except TApplicationException as ex:
            logging.exception('TApplication exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = ex
        except Exception:
            logging.exception('Unexpected exception in handler')
            msg_type = TMessageType.EXCEPTION
            result = TApplicationException(TApplicationException.INTERNAL_ERROR, 'Internal error')
        oprot.writeMessageBegin("checkAccountState", msg_type, seqid)
        result.write(oprot)
        oprot.writeMessageEnd()
        oprot.trans.flush()

# HELPER FUNCTIONS AND STRUCTURES


class authoriseUser_args(object):
    """
    Attributes:
     - authorisationData

    """


    def __init__(self, authorisationData=None,):
        self.authorisationData = authorisationData

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
                    self.authorisationData = AuthorisationData()
                    self.authorisationData.read(iprot)
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
        oprot.writeStructBegin('authoriseUser_args')
        if self.authorisationData is not None:
            oprot.writeFieldBegin('authorisationData', TType.STRUCT, 1)
            self.authorisationData.write(oprot)
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
all_structs.append(authoriseUser_args)
authoriseUser_args.thrift_spec = (
    None,  # 0
    (1, TType.STRUCT, 'authorisationData', [AuthorisationData, None], None, ),  # 1
)


class authoriseUser_result(object):
    """
    Attributes:
     - success
     - userDoNotExistException
     - invalidPasswordException

    """


    def __init__(self, success=None, userDoNotExistException=None, invalidPasswordException=None,):
        self.success = success
        self.userDoNotExistException = userDoNotExistException
        self.invalidPasswordException = invalidPasswordException

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
                    self.success = AuthorisationResponse()
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
                    self.invalidPasswordException = InvalidPasswordException()
                    self.invalidPasswordException.read(iprot)
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
        oprot.writeStructBegin('authoriseUser_result')
        if self.success is not None:
            oprot.writeFieldBegin('success', TType.STRUCT, 0)
            self.success.write(oprot)
            oprot.writeFieldEnd()
        if self.userDoNotExistException is not None:
            oprot.writeFieldBegin('userDoNotExistException', TType.STRUCT, 1)
            self.userDoNotExistException.write(oprot)
            oprot.writeFieldEnd()
        if self.invalidPasswordException is not None:
            oprot.writeFieldBegin('invalidPasswordException', TType.STRUCT, 2)
            self.invalidPasswordException.write(oprot)
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
all_structs.append(authoriseUser_result)
authoriseUser_result.thrift_spec = (
    (0, TType.STRUCT, 'success', [AuthorisationResponse, None], None, ),  # 0
    (1, TType.STRUCT, 'userDoNotExistException', [UserDoNotExistException, None], None, ),  # 1
    (2, TType.STRUCT, 'invalidPasswordException', [InvalidPasswordException, None], None, ),  # 2
)


class checkAccountState_args(object):
    """
    Attributes:
     - authorisationData

    """


    def __init__(self, authorisationData=None,):
        self.authorisationData = authorisationData

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
                    self.authorisationData = AuthorisationData()
                    self.authorisationData.read(iprot)
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
        oprot.writeStructBegin('checkAccountState_args')
        if self.authorisationData is not None:
            oprot.writeFieldBegin('authorisationData', TType.STRUCT, 1)
            self.authorisationData.write(oprot)
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
all_structs.append(checkAccountState_args)
checkAccountState_args.thrift_spec = (
    None,  # 0
    (1, TType.STRUCT, 'authorisationData', [AuthorisationData, None], None, ),  # 1
)


class checkAccountState_result(object):
    """
    Attributes:
     - success
     - userDoNotExistException
     - invalidPasswordExcpetion

    """


    def __init__(self, success=None, userDoNotExistException=None, invalidPasswordExcpetion=None,):
        self.success = success
        self.userDoNotExistException = userDoNotExistException
        self.invalidPasswordExcpetion = invalidPasswordExcpetion

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
                    self.success = Account()
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
            else:
                iprot.skip(ftype)
            iprot.readFieldEnd()
        iprot.readStructEnd()

    def write(self, oprot):
        if oprot._fast_encode is not None and self.thrift_spec is not None:
            oprot.trans.write(oprot._fast_encode(self, [self.__class__, self.thrift_spec]))
            return
        oprot.writeStructBegin('checkAccountState_result')
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
all_structs.append(checkAccountState_result)
checkAccountState_result.thrift_spec = (
    (0, TType.STRUCT, 'success', [Account, None], None, ),  # 0
    (1, TType.STRUCT, 'userDoNotExistException', [UserDoNotExistException, None], None, ),  # 1
    (2, TType.STRUCT, 'invalidPasswordExcpetion', [InvalidPasswordException, None], None, ),  # 2
)
fix_spec(all_structs)
del all_structs

