const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const {UserModel, TodoModel} = require("./db");
app.use(express.json());
app.use(express.static('public'));
const JWT = require('jsonwebtoken');
// const jwt_secret = "s3cret";
const {auth, jwt_secret} = require("./auth");
const { z } = require('zod');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://1311amitkr:vGGLtfR3sokm2aEy@cluster0.5ghknrp.mongodb.net/todo_amit1")

app.post('/signup', async (req,res) => {

    // Input validation
    // zod body
    const requiredBody = z.strictObject({
        email:z.string().min(3).max(100).email(),
        name:z.string().min(3).max(100),
        password:z.string().min(4, {message:"password must be 4 characters long"})
        .max(30, {message:"password must not exceed 30 characters"})
        .refine((val) => /[A-Z]/.test(val),{ message:"Password must contain atleast one uppercase letter"})
        .refine((val) => /[a-z]/.test(val),{ message:"Password must contain atleast one lowercase letter"})
        .refine((val) => /[0-9]/.test(val),{ message:"Password must contain atleast one number"})
        .refine((val) => /[!@#$%^&*]/.test(val),{ message:"Password must contain atleast one special characters from (!@#$%^&*) "})
    })

    // parsing the zod body

    //const parseddata = requiredBody.parse(req.body); 2 methods to do it
    const parseddataWithSuccess = requiredBody.safeParse(req.body);

    if(!parseddataWithSuccess.success) {
        res.json({
            message:"Incorrect Format",
            error:parseddataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // hashing the password
    const hashpassword = await bcrypt.hash(password,5);
    //console.log(hashpassword);

    await UserModel.create({
        email: email,
        password: hashpassword,
        name: name
    });

    res.json({
        message: "You have Signed in"
    })
});

app.post('/signin', async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        //password: password
    });

    //console.log(response);
    if(!response) {
        res.status(403).json({
            message: "User does not exist in our db"
        })
    }

    const passwordMatch = await bcrypt.compare(password,response.password);

    if(passwordMatch) {
        const token = JWT.sign({
            id: response._id.toString()},jwt_secret);
        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message: "Invalid Creds"
        })
    }
});

app.post('/todo', auth, async (req,res) => {
    const { title, done } = req.body;
    const user = await UserModel.findOne({
        UserId : req.UserId
    })

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const newTodo = await TodoModel.create({
        title: title,
        done : done?? false,
        userId: user._id
    })

    res.status(201).json({
        message: "Todo added successfully",
        todo: newTodo
    });
});

// Create a GET route for the todo endpoint
app.get("/todos", auth, async function (req, res) {
    // Get the userId from the request object
    const userId = req.userId;

    console.log(userId);

    try {
        // Find all the todos for the authenticated user
        const todos = await TodoModel.find({ userId }).select("title -_id");

        // If todos are found
        if (todos) {
            // Send the todos to the client
            res.status(200).json(todos);
        } else {
            // If no todos are found, send an error message
            res.json({ message: "No todos found" });
        }
    } catch (error) {
        // Handle potential errors in fetching todos
        res.status(500).json({ message: "Error fetching todos" });
    }
});

app.listen(3000);