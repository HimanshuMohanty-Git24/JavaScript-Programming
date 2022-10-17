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
let person = {//object
    name: 'Hima',
    age: 30
};
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
let n1 = "Hima";
let n2 = "Ram";
//Backticks are generally used when you need to include variables or expressions into a string.
let res = `Both ${n1} and ${n2} study in KIIT`;
console.log(res);
const value1 = Symbol("Hello");
console.log(value1);
console.log(typeof (res));
console.log(4 ** 2);//power
