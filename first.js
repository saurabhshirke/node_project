// console.log('testing testing');

const fs = require('fs');
const data = 'stranger';
fs.writeFile("output.txt",data,(err) => {
  if(err) console.log("error occured");
  else console.log('file written succefully');
});
