const express = require("express");
const JWT = require("jsonwebtoken");
const app = express();

const secret_key = "Amit@865432";
app.use(express.json());

const users = [];

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }


app.post("/signup",(req,res) => {
    //console.log("Request body (signup):", req.body);
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password
    })

    res.json({
        message : "you have signed up"
    })
    console.log(users);
})

app.post("/signin",(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username == username && user.password == password);

    if(user){
        const token = JWT.sign({username: username},secret_key);
        //user.token = token;
        res.send({
            token
        })
        console.log(user);
    }
    else{
        res.status(403).json({
            message: "Invalid username or password"
        })
    }
    console.log(users);
})

// app.get("/me", (req,res) => {
//     const token = req.headers.token;
//     const decodedinfo = JWT.verify(token,secret_key);
//     const username = decodedinfo.username;
//     const u = users.find(u => u.username == username);
//     if(u){
//         res.json({
//             username : u.username,
//             password : u.password
//         })
//     }   
//     else{
//         res.json({
//             message: "No user found"
//         })
//     }
// })

// Auth as a middleware ...
function auth(req,res,next) {
    const token = req.headers.token;

    const decodedData = JWT.verify(token,secret_key);

    if(decodedData.username) {
        req.username = decodedData.username;
        next();
    }
    else{
        res.json({
            message:"you are not logged in"
        })
    }
}

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/me", auth, (req, res) => {
    const user = req.username;
    const founduser = users.find(u => u.username == user);
    res.json({
        username:founduser.username,
        password:founduser.password
    })
})

app.listen(3000);




