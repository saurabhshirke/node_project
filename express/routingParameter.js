const express = require('express');
const app = express();

app.get('',(req,res) => {
  const name = req.query.name;
  if(name){
    res.send(`Welcome ${name}`);
  }else{
    res.send('Routing parameter for node js');
  }
})


app.listen(2000 , () => {
  console.log('server is running on 2000 port');
});