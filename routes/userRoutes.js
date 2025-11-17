const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");


route.post("/users", userController.createUser);
route.get("/", userController.getUsers);
route.get("/:id", userController.getUserById);

module.exports = route;
