const http = require('http');
const data = require('./empData');

http.createServer((req,res) => {
  res.writeHead(500,{'content-type':'application\json'})
  // res.write(JSON.stringify({'name':'saurabh','dep':'CS'}))
  res.write(JSON.stringify(data))
  res.end()
}).listen(1000);