const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB(); // db connection

app.use(express.json()); // data get as object 

// get employee data
app.get('/employees', async (req,res) =>{
  try {
    const employees = await Employee.find();
    res.json(employees);
  }catch(error){
    console.log('error fetching employee data',error);
    res.status(500).send('server error');
  }
})

// get employee data individual
app.get('/employees/:id', async (req,res) =>{
  try {
    const employee = await Employee.findById(req.params.id);
    if(!employee){
      return res.status(404).json({msg:'Employee Not Found'});
    }

    res.json(employee);

  }catch(error){
    console.log('error fetching employee data',error);
    res.status(500).send('server error');
  }
})


// Create employee data
app.post('/employees', async (req,res) => {
   try{
     const {name,email,position,department} = req.body;

     const newEmployee = new Employee({
        name,
        email,
        position,
        department
     });

     const employee = await newEmployee.save();

     res.json(employee);

   }catch(error){
      console.log('error saving data');
      res.status(500).send('server error');
   }
})


// Update PUT employee data
app.put('/employees/:id', async (req,res) => {
  try{
    const {name,email,position,department} = req.body;
    const employeeId = req.params.id;

    const updateEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      {name,email,position,department},
      {new:true}
    )

    if(!updateEmployee){
      return res.status(404).json({msg:"Employee not found"});
    }

    res.json(updateEmployee);

  }catch(error){
     console.log('error updating data',error);
     res.status(500).send('server error');
  }
})


// Update PATCH employee data
app.patch('/employees/:id', async (req,res) => {
  try{
    const updatedData = req.body;
    const employeeId = req.params.id;

    const updateEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      { $set : updatedData },
      { new:true }
    )

    if(!updateEmployee){
      return res.status(404).json({msg:"Employee not found"});
    }

    res.json(updateEmployee);

  }catch(error){
     console.log('error updating data',error);
     res.status(500).send('server error');
  }
})

//DELETE employee data
app.delete('/employees/:id', async (req,res) => {
  try{
    const employeeId = req.params.id;
    const deleteEmployee = await Employee.findByIdAndDelete(employeeId)

    if(!deleteEmployee){
      return res.status(404).json({msg:"Employee not found"});
    }

    res.json({msg:"Employee delete successfully"});

  }catch(error){
     console.log('error deleting data',error);
     res.status(500).send('server error');
  }
})

app.listen(3000,()=>{
  console.log('sevre is running in 3000 port');
})