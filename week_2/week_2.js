// // // const fs = require("fs");

// // // const content1 = fs.readFileSync("a.txt", "utf-8")
// // // const content2 = fs.readFileSync("b.txt", "utf-8")


// // // console.log(content1 + " " + content2);

// // // function sum(a,b){
// // //     return a + b;
// // // }

// // // function subtract(a,b){
// // //     return a - b;
// // // }

// // // function multiply(a,b){
// // //     return a * b;
// // // }

// // // function divide(a,b){
// // //     return a / b;
// // // }

// // // function do_operation(a,b,op){
// // //     return op(a,b);
// // // }

// // // let ans = do_operation(2,7,subtract);
// // // console.log(ans);


// // // const fs = require("fs");

// // // function read(err,data){
// // //     console.log(data);
// // // }

// // // fs.readFile("a.txt", "utf-8",read); // asynchronously

// // // fs.readFile("b.txt", "utf-8",read); // asynchronously

// // // console.log("Done!");  // a.txt and b.txt have gone for i/o operation and done is printed first.


// // function timeout(){
// //     console.log("Click the Button");
// // }

// // console.log("Hello");

// // setTimeout(timeout, 1000);

// // console.log("Welcome");

// // let c = 0;
// // for(let i = 0;i<1000000000;i++){
// //     c = c + 1;
// // }

// // console.log("Expensive Operation Done");


// class Rectangle{
//     constructor(width, height, color){
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     }

//     area(){
//         const area = this.width * this.height;
//         return area;
//     }

//     paint(){
//         console.log(`Paint this rectangle with color ${this.color}.`);
//     }
// }

// const rect = new Rectangle(2,4,"Blue");
// let area = rect.area();
// console.log(area);
// rect.paint();

// const date = new Date();
// console.log(date.getFullYear());

// const map = new Map();
// map.set("name", "Amit");
// map.set("age", 21);
// console.log(map.get("age"));



// this function return an object of promise class.
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback(){
//     console.log("function called after 3 sec.");
// }

// setTimeoutPromisified(3000).then(callback);


// function random(resolve){
//     setTimeout(resolve,3000);
// }

// const p = new Promise(random);

// function callback(){
//     console.log("Printed after 3 sec.");
// }

// p.then(callback);

// const fs = require("fs");

// function readthefile(resolve){
//     fs.readFile("a.txt", "utf-8", function(err,data){
//         resolve(data);
//     })
        
// }

// function read_file(filename){
//     return new Promise(readthefile);
// }

// const p = read_file();

// function callback(contents){
//     console.log(contents);
// }

// p.then(callback);


const fs = require("fs");

function write_the_file(resolve){
    fs.writeFile("c.txt", "hello node.js coder", "utf-8", function(err){
        if(err) console.log(err.message);
        resolve("Message Written Successfully.");
    })
}


function write_file(file_name){
    return new Promise(write_the_file);
}

const p = write_file();

function callback(message){
    console.log(message);
}

p.then(callback);