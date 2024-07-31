const fs = require('fs');
const path = require('path');

const myCRUD = path.join(__dirname,'CRUD');
const myPath = `${myCRUD}/crud.txt`;

// create
// fs.writeFileSync(myPath,'Create Read Update delete');


//read
// fs.readFile(myPath,'utf8',(err,file) => {
//   console.log(file); 
// });

// update
// fs.appendFile(myPath,' in node js',(err) => {
//   if(!err){
//     console.log('your file is updated successfully');
//   }
// });

//delete
// fs.unlinkSync(myPath);


//rename
fs.rename(myPath,`${myCRUD}/renameCrud.txt`,(err) =>{
  if(!err){
    console.log('your file is renamed successfully');
  }
});