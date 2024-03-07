const http = require('node:http');

const server = http.createServer((req, res) => {

  // 设置响应头
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'GET' && req.url === '/api/data') {
    // 处理 GET 请求 /api/data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello, world!' }));
  } else if (req.method === 'POST' && req.url === '/api/data') {
    // 处理 POST 请求 /api/data
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: `Received data: ${body}` }));
    });
  } else {
    // 处理其他请求
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.c

server.listen(5500, () => {
  console.log('Server listening on port 3000');
});