const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

let connectedClients = 0;
let timer = null;

io.on('connection', (socket) => {
    timer && clearInterval(timer);
    // 新客户端连接
    connectedClients++;
    console.log(`Client connected. Total clients: ${connectedClients}, IP: ${socket.handshake.address}`);

    // 监听来自客户端的消息
    socket.on('message', (data) => {
        console.log(`Message from client: ${data}`);
    });

    // 监听客户端断开连接事件
    socket.on('disconnect', () => {
        connectedClients--;
        console.log(`Client disconnected. Total clients: ${connectedClients}`);
    });

    timer = setInterval(() => {
        console.log(`${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()} Total clients: ${connectedClients}`);
    }, 1000)
});



const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
