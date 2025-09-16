// interface user {
//     name: string,
//     age: number
// }
// const user1:user = {
//     name:"akut",
//     age:34
// }
// const user2:user = {
//     name:"akuti",
//     age:21
// }
// function sumOfAge(user1:user, user2:user) {
//     return user1.age + user2.age;
// }
// let num = sumOfAge({name:"Amit", age:20}, {name:"akur",age:30});
// let sum_age = sumOfAge(user1, user2);
// // console.log(sum_age);
// // console.log(num);
// // Pick in TypeScript
// interface User {
//     id: string,
//     name: string,
//     age: number
//     email: string,
//     password: string
// }
// type updatedProps = Pick<User, 'name' | 'age' | 'password'>  // Pick let you fetch the values from both interafce and type.
// type updatedPropsPartial = Partial<updatedProps> // let you choose from interface and types partially. hover over to see.
// function updateProps(updatedPropsPartial: updatedPropsPartial) {
//     // hit the database to update the user
// }
// // In js and ts we can change the inner of an array or obj.
// // example :
// const a = [1,5,6,3];
// a[0] = 9;
// but we can not reassign the array a to some new array;
//example:  
// const c = [1,4,5,6,7,9];
// c = [7,6,8,0]; // this shows error
// type user1 = {
//     name: string,
//     age: number
// }
// const user4:user1 =  {
//     name : "amit",
//     age: 31
// }
// user4.name = "fukka" // see i can change inside of varible of array and object.
//if we make it readonly then we can not change the inner also.
// type user5 = {
//     readonly name: string,
//     readonly age: number // either we can use readonly here or when we are initializing a object
// }
// const user6: Readonly <user5> = {
//     name : "amit",
//     age: 16
// }
// user6.age = 7; // we will not be able to change it now.
//Record and map
// Record<K, T> is a utility type.
// It lets you create an object type where: keys are of type K and values are of type T
// Record with string keys and number values
// Record with string keys and number values
// type ScoreBoard = Record<string, number>;
// const scores: ScoreBoard = {
//   Alice: 90,
//   Bob: 85,
//   Charlie: 92
// };
// console.log(scores["Alice"]); // 90
// type ScoreBoard = Record<string, {"id": string, "score": number}>;  //value can be a complex object too
// const scores: ScoreBoard = {
//   Alice: {id: "120", score: 98},
//   Bob:  {id: "121", score: 86},
//   Charlie:  {id: "122", score: 90}
// };
// console.log(scores["Alice"]); // 90
// Map in TypeScript
// Map<K, V> is a built-in JavaScript class (ES6).
// It allows runtime dynamic key-value storage.
// Keys can be any type (objects, functions, numbers, etc.), not just strings.
// const user1 = { id: 1 };
// const user2 = { id: 2 };
// const userMap = new Map<object, string>();
// userMap.set(user1, "Admin"); // set to set the value 
// userMap.set(user2, "Guest");
// console.log(userMap.get(user1)); // get to get the values 
// exclude
// Exclude is a built-in utility type that helps you remove (exclude) certain types from a union.
// type MyUnion = "a" | "b" | "c";
// type WithoutB = Exclude<MyUnion, "b">;
// Result: "a" | "c"
// Type inference in zod
// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information
import { z } from 'zod';
import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
// Define the schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    const updateBody = req.body; // how to assign a type to updateBody?
    if (!success) {
        res.status(411).json({
            message: "Invalid"
        });
        return;
    }
    // update database here
    res.json({
        message: "User updated"
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map