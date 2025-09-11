function greet(first_name : string) {
    console.log("hello " + first_name)
}

greet("amit");


function sum(a : number , b: number) {
    return (a + b);
}

console.log(sum(3,9));

function isLegal(age:number) {
    if(age > 17) return true;
    return false;
}

console.log(isLegal(18));

// Create a function that Takes a function as a input and runs it after 1 second.
function runs_1secAfter(fn : () => void){
    setTimeout(fn,1000);
}

function runs(a : string){
    console.log(a + " This function will Run after 1 Sec");
}

runs_1secAfter(() => runs("amit"));