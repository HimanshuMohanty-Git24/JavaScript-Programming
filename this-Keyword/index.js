//Global Space

console.log(this);//global object

//inside a function

function foo(){
    console.log(this);//the value depens on strict(undefined) and non-strict mode(globalObjects)
}

foo();
/**
 * This Substitution:
 * If the value of this keyword is undefined or null
 * this will be replaced with globalObject
 */
//how the function is called also affects the value of this

//object method
//method vs function:
//method is a function that is a property of an object
const obj = {
    a:10,
    x: function(){
        console.log(this);
    }
}
obj.x();

//arrow functions don't have their own this it behaves like lexical context
//in DOM this keyword refers to the element that triggered the event