from thrift.protocol import TBinaryProtocol
from thrift.transport import TTransport
from thrift.transport import TSocket
from thrift import Thrift

from account import AccountCreationService
from account import ttypes


def main():
    # Make socket
    transport = TSocket.TSocket('localhost', 9001)

    # Buffering is critical. Raw sockets are very slow
    transport = TTransport.TBufferedTransport(transport)

    # Wrap in a protocol
    protocol = TBinaryProtocol.TBinaryProtocol(transport)

    # Create a client to use the protocol encoder
    client = AccountCreationService.Client(protocol)

    # Connect!
    transport.open()

    createAccountRequest = ttypes.CreateAccountRequest()
    createAccountRequest.name = 'Mat'
    createAccountRequest.surname = 'Zem'
    createAccountRequest.pesel = '123456'
    createAccountRequest.incomeDeclaration = 3000

    try:
        response = client.createAccount(createAccountRequest)
        print(response)
    except ttypes.UserAlreadyExist as error:
        print('Error! ' + error.message + ' pesel: ' + error.pesel)

    # Close!
    transport.close()


main()
