const express = require('express');
const app = express();

app.get('',(req,res) => {
  res.send('Hii tem good morning');
})

app.get('/contact',(req,res) => {
  res.send('constact us');
})

app.listen(1000);