// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.use(express.json());

// // In-memory "database"
// let todo = [
//   { id: 1, title: "Go to gym" },
//   { id: 2, title: "Attend classes" }
// ];

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// // GET all users
// app.get("/users", (req, res) => {
//   res.json(todo.title);
// });

// // POST new user
// app.post("/users", (req, res) => {
//   const newtodo = req.body;
//   todo.push(newtodo); // 👈 Add to array
//   res.json({ message: "new Todo added!", todo });
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); // middleware is used as to send json data. for post method

// In-memory "database"
let todos = [
  { id: 1, title: "Go to gym" },
  { id: 2, title: "Attend classes" }
];

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Todo API ✅");
});

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// GET a single todo by ID
app.get("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

// POST - add new todo
app.post("/todos", (req, res) => {
  const newTodo = {
    id: todos.length + 1,  // auto-generate ID
    title: req.body.title
  };

  if (!newTodo.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  todos.push(newTodo);
  res.status(201).json({ message: "Todo added!", todos });
});

// PUT - update a todo
// app.put("/todos/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const todo = todos.find(t => t.id === id);

//   if (!todo) return res.status(404).json({ error: "Todo not found" });

//   todo.title = req.body.title || todo.title;  // update only title
//   res.json({ message: "Todo updated!", todo });
// });

// // DELETE - remove a todo
// app.delete("/todos/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   todos = todos.filter(t => t.id !== id);
//   res.json({ message: "Todo deleted!", todos });
// });

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
