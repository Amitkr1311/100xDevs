// function greet(first_name : string) {
//     console.log("hello " + first_name)
// }

// greet("amit");


// function sum(a : number , b: number) {
//     return (a + b);
// }

// console.log(sum(3,9));

// function isLegal(age:number) {
//     if(age > 17) return true;
//     return false;
// }

// console.log(isLegal(18));

// // Create a function that Takes a function as a input and runs it after 1 second.
// function runs_1secAfter(fn : () => void){
//     setTimeout(fn,1000);
// }

// function runs(a : string){
//     console.log(a + " This function will Run after 1 Sec");
// }

// runs_1secAfter(() => runs("amit"));


// function greet_(user : {
//         name: string,
//         age: number
//     })
//     {
//         console.log("hii " + user.name);
//     }

// let user = {
//     name:"Amit",
//     age:21
// }

// greet_(user);


interface Point2D {  
  x: number;  
  y: number;  
}  

const p1: Point2D = { x: 3, y: 5 };     // OK  
const p2: Point2D = { x: 1.8, y: 7.2 }; // OK  

// const p3: Point2D = {
//   x: 1,
//   y: 1,
//   name: "John",
//   age: 29,
// }; 
// all of a sudden John is 2D point!  

const intermediaryPoint = { x: 1, y: 1, name: "John", age: 29 };  
const p3: Point2D = intermediaryPoint; // No error from excess property check


const intermediary = { x: 1, name: "John", age: 29 };  
const p4: Point2D = intermediary;  
// Error: Property 'y' is missing in type '{ x: number; name: string; age: number; }' but required in type 'Point2D'.(2741)  