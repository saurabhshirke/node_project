//builtin event listener
// const fs = require('fs');

// const myRead = fs.createReadStream('./input.txt');

// myRead.on('open',() => {
//   console.log('input file open');
// });


//customize event listener
const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('play',(type) => {
  console.log(`i am playing ${type}`);
})

eventEmitter.emit('play',"cricket")