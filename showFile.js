const fs = require('fs');

// fs.writeFileSync("show.txt",'node js');

// const path = require('path');

// const myFolder = path.join(__dirname,'myFolder')

// console.log(myFolder);

// for (let i = 0; i < 3; i++) {
//   fs.writeFileSync(`${myFolder}/show${i}.txt`,"this is file NO:" + i);
// }

// fs.readdir(myFolder,(err,items) => {
//   items.forEach((file) => {
//     console.log(file);
//   })
// });

fs.appendFile('mynewfile1.txt', 'Hello content ss!', function (err) {
  if (err) throw err;
  console.log('Saved!');
})

fs.open('mynewfile1.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});