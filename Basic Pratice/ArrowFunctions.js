//Syntax
const sayHello = () =>{
    console.log('Hello');
};
sayHello();

const add = (a , b) =>{
    return a+b;
}

const addv2 = (a, b) => a+b; //one liner arrow function

console.log(add(2,3));
console.log(addv2(2,3));

//arguments keyword is not available in arrow functions

//spread operator
const addNumbers = (...numbers) =>{
    console.log(numbers);
}

//Hoisting :  it is the process of moving function declarations to the top of the file and storing them in memory during the compile phase.
//Arrow functions are not hoisted
sayHey(); //this will throw an error
const sayHey = () =>{
    console.log('Hello');
}
sayHey();

//This Keyword works differently/wierdly in arrow functions