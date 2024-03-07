const socketIOClient = require('socket.io-client');
const socket = socketIOClient('http://localhost:3000');

// 客户端连接到服务器
socket.on('connect', () => {
  console.log('Connected to server');
});

// 监听服务器发送的消息
socket.on('message', (data) => {
  console.log(`Message from server: ${data}`);
});

// 监听服务器断开连接事件
socket.on('disconnect', () => {
  console.log('Disconnected from server');
});
