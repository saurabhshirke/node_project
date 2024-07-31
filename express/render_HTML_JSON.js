const express = require('express');

const app = express();

app.get('',(req,res) => {
    res.send(`
      <input type="text" placeholder="your name" />
      <a href="/about" > Go to new page </a> 
      `);
})

app.get('/contact',(req,res) => {
  res.send(`
    <h1>hello </h1>
    `);
})

app.get('/about',(req,res) => {
  res.send([
    {name:"saurabh",add:"test"},
    {name:"saurabh1",add:"test1"},
    {name:"saurabh2",add:"test2"}
  ]);
})


app.listen(2000);
