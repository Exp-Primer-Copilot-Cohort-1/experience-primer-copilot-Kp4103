// Create web server
// 1. Create a web server
// 2. Listen to a port
// 3. Handle requests
// 4. Return response

// 1. Create web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Request:', req.url);
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // 3. Handle requests
  if (req.url === '/') {
    // 4. Return response
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/api') {
    // 4. Return response
    const data = [
      { name: 'Alex', age: 21 },
      { name: 'John', age: 25 },
      { name: 'Sara', age: 19 },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

// 2. Listen to a port
server.listen(3000, '