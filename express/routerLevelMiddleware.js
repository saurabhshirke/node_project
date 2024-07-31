
// Router Level Middleware | Single & Multiple Routes

const express = require('express');
const reqFilter = require('./middleware')

const app = express();

const route = express.Router();

route.use(reqFilter);

app.get('/',(req,res) => {
  res.send('this is your home page');
})

route.get('/about',(req,res) => {
  res.send('this is your about');
})

route.get('/contact',(req,res) => {
  res.send('this is your contact');
})

app.use('/',route);

app.listen(3000);