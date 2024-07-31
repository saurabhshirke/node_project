const express = require('express');
const connectDB = require('./db/db_connection');
const Employee = require('./models/employeeModel');

const app = express();

connectDB();

const addEmployee = async () => {
  await Employee.create({
    name:'saurabh1',
    email:'saurabh1@gmail.com',
    position:'software',
    department:'it',
  })
}

const getEmployee = async () => {
  const employees = await Employee.find();
  console.log("Employee data",employees);
}

const updateEmployee = async (id,updateData) => {
  const result = await Employee.updateOne({_id:id},{$set:updateData});

  console.log(
    result.nModified === 0 ? `No updated for employee ${id}` : 'upated employee data:',result
  );
}

const deleteEmployee = async (id) => {
  const result = await Employee.findByIdAndDelete(id);

  console.log(`Employee ${id} deleted`);
}


const main = async () =>{

// addEmployee();

  // getEmployee();

  // const emmployeeID = '66a8b35d8bb9e5f6123a7142';
  // const updatedData = {
  //   position:'manager',
  //   department:'CA'
  // }

  // await updateEmployee(emmployeeID,updatedData);

  // deleteEmployee(emmployeeID);

}

main();

app.listen(3000,()=>{
  console.log('server 3000 port');
})