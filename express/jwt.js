const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();
const secretKey ='jk00jdkndjc';

app.post('/login',(req,res) => {
    const user = {
      username : 'saurabh',
      email : 'saurabh@gmail.com'
    }

    const token = jet.sign({ user },secretKey,{expireIn : '500s'});
    res.json(token);
})

const verifyToken = (req,res,next) => {
  const beareHeader = req.header['authorization'];
  if(beareHeader){
    const token = beareHeader.split(" ")[1];
    req.token = token;
    next();

  }else{
    res.status(403).json({result:"token is not valid"})
  }
}

app.post('/protected',verifyToken,(req,res) => {
  jwt.verify(req.token,secretKey,(err,authData) => {
    if(err){
      res.status(403).json({result:"Unauthorized User"});
    }else{
      res.json({
        message:"Your are authorized User",
        authData
      });
    }
  }) 
})

app.listen(3000,()=>{
  console.log('server is running on 3000 port');

});