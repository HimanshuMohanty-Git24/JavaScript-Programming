/**
 * It is a functions that takes a function as an argument, or returns a function.
 */
function add(a,b,print){//higher order function
    let res = a+b;
    print(res);//callback function : The function that is passed as an argument to another function.

    return () => console.log("Hello");//returning a function
}

add(2,4,function (val){
    console.log(val);
})

add(3,6, val => console.log(val));

let f = add(4,1, val => console.log(val));

f();