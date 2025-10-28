const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
  { id: 1, name: "Jossy", age: 34 },
  { id: 2, name: "Ama", age: 56 },
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send("user added successfully!");
});

app.get("/", (req, res) => {
  res.send("welcome to our first backend server!");
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "a student";
  res.send(`Hiii, this is ${name}`);
});

app.get("/user/:id", (req, res) => {
  res.send(`User dynamic id is:  ${req.params.id}`);
});

app.post("/user", (req, res) => {
  const { name, age } = req.body;
  res.send(`User created: ${name}, age ${age}`);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});

// http://localhost:3000/
// http://localhost:3000/greet?name=Blessing
// http://localhost:3000/user/767
