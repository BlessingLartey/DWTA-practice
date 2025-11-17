const User = require("../models/User");

exports.createUser = async(req, res) => {
  try{
    const {name, age} = req.body;
    const newUser = new User({name, age});
    await newUser.save();
    res.status(201).json({message: "User added succesfully!", user: newUser});
  } catch(error){
    res.status(500).send("Error adding user: " + error.message);
  }
};

exports.getUsers = async(req, res) => {
  try{
    const users = await User.find();
    res.json(users);
  } catch (error){
    res.status(500).send("Error fetching users: " + error.message);
  }
};

exports.getUserById = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found!")
            res.json(user);
     } catch(error){
        res.status(500).send("Error fetching users: " + error.message);
    }
}