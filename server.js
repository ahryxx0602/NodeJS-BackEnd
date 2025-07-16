const http = require("http");

const hostname = "localhost"; //127.0.0.1
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\nHello Thanh!!!");
});

// starts a simple http server locally on port 3000
server.listen(port, hostname, () => {
  console.log(`Listening at http://${hostname}:${port}/`);
});
