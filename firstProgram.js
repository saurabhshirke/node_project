// console.log('testing testing');

const myfile = require('fs').writeFileSync;
// const data = 'stranger';
// myfile.writeFile("output.txt",data,(err) => {
//   if(err) console.log("error occured");
//   else console.log('file written succefully');
// });


myfile("test.txt","file sync successfully");
