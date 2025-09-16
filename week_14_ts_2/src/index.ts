// implementing interface...

// interface Address {
//     city: string,
//     pincode: number,
//     houseNo: string
// }


// interface User {
//     name: string,
//     age: number,
//     address ? : Address // ? makes it optional to use
// }

// interface office {
//     address: Address
// }

// let user1: User = {
//     name:"amit",
//     age: 21,
//     address:{
//         city: "raichur",
//         pincode: 584114,
//         houseNo: "1254"
//     }
// }

// let user2: User = {
//     name: "krishna",
//     age: 16,
// }

// function isLegal(user:User):boolean {
//     if(user.age > 18 ) return true;
//     else{
//         return false;
//     }
// }

// console.log(isLegal(user1));

// console.log(isLegal(user2));


// interface people {
//     name: string,
//     age: number,
//     //greet: () => string 0 we can implement like
//     isLegal() : boolean
// }


//const person : people = {
    // name: "amit",
    // age: 30,
    // greet: () => {
    //     return "hii greet function called."
    // }
//}


// implementing class using interface...

// interface people {
//     name: string,
//     age: number,
//     //greet: () => string 0 we can implement like
//     isLegal() : boolean
// }


// // We can implement a class which implements interface

// class Manager implements people {
//     name: string
//     age: number
//     city: string // we can add more than fields from the interface implemented

//     constructor(name: string, age: number, city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//     }

//     isLegal(): boolean {
//         return this.age > 18;
//     }
// }

// const m1 = new Manager("amit", 21,"bengaluru");

// console.log(m1.isLegal())

// difference between abstract class and interface is that we can pre defined function in abstract class interface.

// we can implements class from interface but not from types and types have extra function such as unions and intersection which are not present in interface.


// syntactical difference between types and interface

// interface
    // interface user {
    //     name: string,
    //     age: number
    // }

// Difference is just of = in types which is not present in interface.

// types 
    // type user2 = {
    //     name: string,
    //     age: number
    // }

// Learning Types ...

// Now unions and intersection in types

// type employee = {
//     name: string,
//     startdate: string
// }

// type manager = {
//     name: string,
//     department: string
// }


// let e1:employee = {
//     name: "amit",
//     startdate: "01-04-2003"
// }

// let m1: manager = {
//     name: "amit Kumar",
//     department: "software"
// }

// let t1: teamLead = {
//         name:"amitkr",
//         startdate:"20-12-2001",
//         department:"communication"
//     }

// type teamLead = employee | manager

// function greet(user: teamLead) {
//     console.log("hello " + user.name + '\n') // if we use age and startDate and department in | it will show error because it is not guarentee that teamLead will include it as name cauz name is in both type
// }

// greet(t1);
// greet(e1);
// greet(m1);


// Arrays

// let arr: number[] = [1,2,3,4,4];

// function findMax(arr : number[]): number | undefined{
//     if(arr.length === 0) return undefined;
//     let max_number = arr[0];
//     for(let i = 1;i < arr.length;i++) {
//         if(arr[i] > max_number) {
//             max_number = arr[i];
//         }
//     }
//     return max_number;
// }

// console.log(findMax(arr));

interface Users {
    firstName: string,
    lastName: string
    age: number
}

function filterUsers(users : Users[]) {
    let ans = [];
    for(let i = 0;i < users.length; i++) {
        if(users[i].age > 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}

const filteredUsers = filterUsers([{
    firstName:"amit",
    lastName:"kumar",
    age:21
}])

console.log(filteredUsers);