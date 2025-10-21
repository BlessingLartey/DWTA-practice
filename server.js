const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to our first backend server!");
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "a student";
  res.send(`Hiii, this is ${name}`);
});

app.get("/user/:id", (req, res) => {
  res.send(`User dynamic id is: ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`);
});

// http://localhost:3000/
// http://localhost:3000/greet?name=Blessing
// http://localhost:3000/user/767
