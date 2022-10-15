      //This is a JS code
console.log("Hello World");
let name='Hello';
console.log(name);
const intrestRate = 2.03;
console.log(intrestRate);
let isApproved = true;
if (isApproved) {
    console.log('True he bhai log');
}
let person ={//object
    name: 'Hima',
    age: 30
}
console.log(person);
console.log(person.name);
let selection = 'name';
person[selection] = 'Ra';
console.log(person.name);
let selectorColor = ['Red', 'Blue'];//array
selectorColor[2] = 2.478;
console.log(selectorColor);
console.log(selectorColor.length);

function greet(name) {
    console.log("Hello " + name);
}
let naam="Himanshu Mohanty"
greet(naam);

function square(num) {
    return num * num;
}
let result = square(2);
console.log(result);