import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import net from 'net';
import socketConn from './serverSocket/ServerSocket';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

const HTTP_PORT = 30000;
const SOCKET_PORT = 35500;
const SERVER_SOCKET_PORT = 10000;

io.listen(SOCKET_PORT)
console.log(`Socket server is listening on port ${SOCKET_PORT}`);

server.listen(HTTP_PORT, () => {
  console.log(`Server is listening on port ${HTTP_PORT}`);
});

const server_socket = net.createServer(socketConn);

// const server_socket = net.createServer((socket) => {
//   console.log("Client connected");
//   socket.on("data", (data) => {
//       const strData = data.toString();
//       console.log(`Received: ${strData}`);

//       const command = strData.split(",");
//       const operator = command[0];
//       const operand1 = parseFloat(command[1]);
//       const operand2 = parseFloat(command[2]);
//       let result;
//       switch (operator) {
//           case "add":
//               result = operand1 + operand2;
//               break;
//           case "sub":
//               result = operand1 - operand2;
//               break;
//       }
//       socket.write(result.toString());
//   });

//   socket.on("end", () => {
//       console.log("Client disconnected");
//   });

//   socket.on("error", (error) => {
//       console.log(`Socket Error: ${error.message}`);
//   });
// });

server_socket.on("error", (error) => {
  console.log(`server_socket Error: ${error.message}`);
});

server_socket.listen(SERVER_SOCKET_PORT, () => {
  console.log(`TCP socket server_socket is running on port: ${SERVER_SOCKET_PORT}`);
});
