// const p = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved");
//     }, 3000);
// });
//async function always return a promise
// async function getData(){
//     return p;
// }

// const data = getData();

// data.then((res)=>{
//     console.log(res);
// })
//async and awiat combo is used to handle promise in a synchronous way

// async function handlePromise(){
//     console.log("Hello World");
//     const data = await p;
//     console.log("Hello");
//     console.log(data);
// }
// handlePromise();

// console.log("Later hello")
//awiat is a keyword that can be used inside an async function

//real world use: fetch api, file read, database read, etc.
const API_URL = "https://api.github.com/users/HimanshuMohanty-Git24";

async function fetchUser(){
    try{
        const res = await fetch(API_URL); //fetch return a promise is guves us a response object which is a readable stream
        const data = await res.json();//it is also a promise
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
fetchUser();

//async await is a sugarcotting over then and catch async await is just a new way of writing promises