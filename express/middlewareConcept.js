const express = require('express');

const app = express();

const reqFilter = (req,res,next) =>{
  const salary = req.query.salary;
  if(!salary){
    res.send("No salary provided");
  }else if(salary < 50000){
    res.send("your salary is below 50000");
  }else{
    next();
  }
}

app.use(reqFilter);

app.get('/',(req,res) => {
  res.send('middleware tutorial in express js');
});

app.get('/about',(req,res) => {
  res.send('this is about page');
});

app.listen(2000,() => {
  console.log('server is running on 2000 port');
});
