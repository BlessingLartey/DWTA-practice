const express = require("express");
const mongoose = require("mongoose");
require ("dotenv").config(); //helps us connect to our variables in .env


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// connecting to our mongodb
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongo connected successfully!!!!")).catch((err) => console.log("Error occurred:", err));

const userSchema = new mongoose.Schema({
    name : String,
    age : Number, 
});

const User = mongoose.model("User", userSchema);

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // move to the next route
});

// let users = [
//   { id: 1, name: "Jossy", age: 34 },
//   { id: 2, name: "Ama", age: 56 },
// ];

// app.post("/users", (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.status(201).send("user added successfully!");
// });

app.get("/", (req, res) => {
  res.send("welcome to our first backend server!");
});
-
app.post("/users", async(req, res) => {
  try{
    const {name, age} = req.body;
    const newUser = new User({name, age});
    await newUser.save();
    res.status(201).json({message: "User added succesfully!", user: newUser});
  } catch(error){
    res.status(500).send("Error adding user: " + error.message);
  }
});

app.get("/users", async(req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  } catch (error){
    res.status(500).send("Error fetching users: " + error.message);
  }
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "a student";
  res.send(`Hiii, this is ${name}`);
});

app.get("/user/:id", (req, res) => {
  res.send(`User dynamic id is:  ${req.params.id}`);
});

// app.post("/users", (req, res) => {
//   const { name, age } = req.body;

//   if (!name || !age) {
//     return res.status(400).send("Name and age are required!");
//   }

//   const newUser = { id: users.length + 1, name, age };
//   users.push(newUser);

//   res.status(201).json({
//     message: "User added successfully!",
//     user: newUser,
//   });
// });


app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  let user = users.find((u) => u.id == id);

  if (!user) {
    return res.status(404).send("User not found!");
  }

  user = Object.assign(user, updatedData);
  res.status(200).json({
    message: `User with ID ${id} updated.`,
    user,
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const userIndex = users.findIndex((u) => u.id == id);

  if (userIndex === -1) {
    return res.status(404).send("User not found!");
  }

  users.splice(userIndex, 1);
  res.status(200).send(`User with ID ${id} deleted successfully!`);
});

// app.use((req, res) => {
//   res.status(404).send("Sorry, this route does not exist!");
// });

app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});

// http://localhost:3000/
// http://localhost:3000/greet?name=Blessing
// http://localhost:3000/user/767
