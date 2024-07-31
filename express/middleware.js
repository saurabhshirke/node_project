const reqFilter = (req,res,next) => {
  const salary = req.query.salary;

  if(!salary){
    res.send('salary not provided');
  }else if(salary < 50000){
    res.send('your salary is 50000k');
  }else{
    next();
  }
}

module.exports = reqFilter;