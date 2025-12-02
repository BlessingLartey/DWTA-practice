const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require ("dotenv").config(); //helps us connect to our variables in .env

const userRoutes = require("./routes/userRoutes");


const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next(); // move to the next route
});

// connecting to our mongodb
mongoose.connect(process.env.MONGO_URI).then(() => console.log("Mongo connected successfully!!!!")).catch((err) => console.log("Error occurred:", err));

app.use("/api/users", userRoutes);

 app.get("/", (req, res) => {
   res.send("welcome to our first backend server!");
 });

app.listen(PORT, () => {
  console.log(`My server is running on port ${PORT}`);
});



// const userSchema = new mongoose.Schema({
//     name : String,
//     age : Number, 
// });

// const User = mongoose.model("User", userSchema);



// let users = [
//   { id: 1, name: "Jossy", age: 34 },
//   { id: 2, name: "Ama", age: 56 },
// ];

// app.post("/users", (req, res) => {
//   const newUser = req.body;
//   users.push(newUser);
//   res.status(201).send("user added successfully!");
// });

// app.get("/", (req, res) => {
//   res.send("welcome to our first backend server!");
// });

// app.post("/users", async(req, res) => {
//   try{
//     const {name, age} = req.body;
//     const newUser = new User({name, age});
//     await newUser.save();
//     res.status(201).json({message: "User added succesfully!", user: newUser});
//   } catch(error){
//     res.status(500).send("Error adding user: " + error.message);
//   }
// });

// app.get("/users", async(req, res) => {
//   try{
//     const users = await User.find();
//     res.json(users);
//   } catch (error){
//     res.status(500).send("Error fetching users: " + error.message);
//   }
// });

// app.get("/greet", (req, res) => {
//   const name = req.query.name || "a student";
//   res.send(`Hiii, this is ${name}`);
// });

// app.get("/user/:id", (req, res) => {
//   res.send(`User dynamic id is:  ${req.params.id}`);
// });

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



// app.use((req, res) => {
//   res.status(404).send("Sorry, this route does not exist!");
// });


// http://localhost:3000/
// http://localhost:3000/greet?name=Blessing
// http://localhost:3000/user/767
