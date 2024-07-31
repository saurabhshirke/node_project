const http = require('http');

// http.createServer((request,response) => {
//   response.writeHead(200,{'content-type':'text/html'});
//   response.write('<h1>hello fron saurabh</h2>');
//   response.end();
// }).listen(1000);

// function as a parameter
const sayHello = (request,response) => {
  response.write('say hello function')
  response.end()
}

http.createServer(sayHello).listen(1000);