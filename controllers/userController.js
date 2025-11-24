const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { name, age, email, password } = req.body;

    //check if fields are filled
    if (!name || !age || !email || !password) {
      return res.status(400).send("Fields are required");
    }

    //Does user exist?
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).send("Email exists or in use");
    }

    //bcrypt usage
    const hashedPassword = await bcrypt.hash(password, 10);

    //save user now
    const newUser = new User({ name, age, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    res.status(500).send("Error adding user: " + error.message);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if fields are filled
    if (!email || !password) {
      return res.status(400).send("Fields are required");
    }

    //Does user exist?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("Email does not exist or in use");
    }

    //compare password with bcrypt
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send("Invalid");
    }

    //create jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5h",
    });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).send("Login error: " + error.message);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found!");
    res.json(user);
  } catch (error) {
    res.status(500).send("Error fetching users: " + error.message);
  }
};

exports.updateUsers = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    let user = await User.findById(id);

    if (!user) {
      return res.status(404).send("User not found!");
    }

    Object.assign(user, updatedData);
    await user.save();

    res.status(200).json({
      message: `User with ID ${id} updated.`,
      user,
    });
  } catch (error) {
    res.status(500).send("Error updating user: " + error.message);
  }
};
