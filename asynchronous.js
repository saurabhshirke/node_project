// asynchronous run small fun first in any one stuck on loading
let firstName = 'saurabh';
let lastName = '';
// // console.log('a');
// setTimeout(() => {
//   // console.log('b');
//   lastName = 'shirke';
// }, 2000)
// console.log(firstName +" "+ lastName);
// this code because of js in asynchronous then output in "saurabh" if you want to show also then use asynawit wait for another output


//async await promises concept

const setLastName = new Promise((resolve,reject) => {
  setTimeout(() => {
    lastName = 'shirke';
    resolve('shirke');
  }, 2000)
})

// setLastName.then((data) => {
//   lastName = data;
//   console.log(firstName +" "+ lastName);
// })
// console.log('hello');

// async await
const dispalyFullName = async () => {
  lastName = await setLastName;
  console.log(`${firstName} ${lastName}`);
}

dispalyFullName();