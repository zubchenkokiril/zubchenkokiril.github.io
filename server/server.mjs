import { createServer } from "node:http";

const server = createServer((req, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, World!\n");
});

server.listen(3000, '127.0.0.1', () => {
  console.log("Server is running on 127.0.0.1:3000");
});