const express = require('express');
const connectDB = require('./db/db_connection');

const app = express();

connectDB();

const user = require('./models/userModel');

const addUser = async () => {
  await user.create({
    name:"20000",
    email:"saurabh@gmail.com"
  })
}

addUser();

app.listen(3000 , () => {
  console.log('server is runnig on 3000 port');
});