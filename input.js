// nodemon .\input.js create input.txt "i am saurabh shirke" // in command line code
// console.log(process.argv[2]);

const fs = require('fs');

const action = process.argv[2];
const file_name = process.argv[3];
const data = process.argv[4];

if(action == 'create'){
  fs.writeFileSync(file_name,data)
}
else if(action == 'delete'){
  fs.unlinkSync(file_name)
}else{
  console.log('invalide action');
}