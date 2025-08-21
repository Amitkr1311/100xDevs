const express = require('express');
const JWT = require('jsonwebtoken');
const secret_key = "jncviofjviodjcnmxjlcnkcn";
const path = require('path');

const app = express();
app.use(express.json());
const port = 3000;


let users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password,
        todos:[]
    })

    res.json({
        message:"You have signed up"
    })
});

app.post('/login', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username == username && u.password == password);
    if(user) {
        const token = JWT.sign({username: username},secret_key);
        res.json({
            token
        })
    }
    else{
        res.status(401).json({ 
            message: "Invalid credentials" 
        });
    }
})

function auth(req,res,next) {
    const token = req.headers.token;
    try {
        const decodedData = JWT.verify(token, secret_key);
        req.username = decodedData.username;
        next();
    } 
    catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

function generateId() {
  return Date.now().toString() + Math.floor(Math.random() * 1000);
}


app.get('/todos', auth, (req,res) => {
    const userFound = users.find(u => u.username == req.username);
    if (!userFound) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json({
        todos : userFound.todos
    })
})

app.post('/addtodos', auth, (req, res) => {
  const userFound = users.find(u => u.username == req.username);
  
  if (!userFound) {
    return res.status(404).json({ message: "User not found" });
  }

  const newTodo = {
    id: generateId(),
    title: req.body.title
  };
  userFound.todos.push(newTodo);
  res.json({ message: "Todo added successfully", todos: userFound.todos });

});

app.put('/todos/:id', auth, (req, res) => {
  const userFound = users.find(u => u.username === req.username);
  if (!userFound) return res.status(404).json({ message: "User not found" });

  const todo = userFound.todos.find(t => t.id === req.params.id);
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  todo.title = req.body.title;
  res.json({ message: "Todo updated", todos: userFound.todos });
});

app.delete('/todos/:id', auth, (req, res) => {
  const userFound = users.find(u => u.username === req.username);
  if (!userFound) return res.status(404).json({ message: "User not found" });

  userFound.todos = userFound.todos.filter(t => t.id !== req.params.id);
  res.json({ message: "Todo deleted", todos: userFound.todos });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});