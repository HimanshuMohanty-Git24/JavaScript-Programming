const fs = require('fs');
//Write to file
//synchronous call
// fs.writeFileSync('test.txt', 'Hello World!');

//asynchronous call
// fs.writeFile('./test.txt', 'Hello World! asyc', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//READ from file
//syncronous call
// const res = fs.readFileSync('contacts.txt', 'utf8');

//asynchronous call
// fs.readFile('contacts.txt', 'utf8', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });

//Append to file
//synchronous call
fs.appendFileSync('test.txt', ',Himanshu!');
console.log('Saved!');


//asynchronous call