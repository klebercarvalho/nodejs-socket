const net = require('net');

const HOST = '127.0.0.1';
const PORT = 6969;
const args = process.argv.slice(2);


const client = new net.Socket();
client.connect(PORT, HOST, () => {
  console.log(`CONNECTED TO: ${HOST}:${PORT}`);
  // Write a message to the socket as soon as the client is connected,
  // the server will receive it as message from the client
  if (typeof args[0] !== 'undefined' && args[0] !== null) {
    client.write(args[0]);
  } else {
    client.write('I am Chuck Norris!');
  }
});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', (data) => {
  console.log(`DATA: ${data}`);
  // Close the client socket completely
  client.destroy();
});

// Add a 'close' event handler for the client socket
client.on('close', () => {
  console.log('Connection closed');
});
