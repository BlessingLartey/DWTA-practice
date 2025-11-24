const express = require("express");
const route = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

route.post("/", userController.createUser);
route.post("/login", userController.login);
route.get("/", userController.getUsers);

// protected route
route.get("/:id", userController.getUserById, authMiddleware);
route.put("/:id", userController.updateUsers); //Edit

module.exports = route;
