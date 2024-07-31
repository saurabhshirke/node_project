const fs = require('fs');

// fs.writeFileSync("show.txt",'node js');

const path = require('path');

const myFolder = path.join(__dirname,'myFolder')

console.log(myFolder);

for (let i = 0; i < 3; i++) {
  fs.writeFileSync(`${myFolder}/show${i}.txt`,"this is file NO:" + i);
}

fs.readdir(myFolder,(err,items) => {
  items.forEach((file) => {
    console.log(file);
  })
});
