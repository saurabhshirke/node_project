// Render Dynamic Data with EJS Template Engine in Express JS

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.get('/welcome',(req,res) => {
  const empInfo = {
    name:"sai",
    id:123,
  }
  res.render('Welcome',{empInfo})
})

app.listen(2000 ,() => {
  console.log('server is running on 2000')
})