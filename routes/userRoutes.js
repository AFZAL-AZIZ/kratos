const express = require('express');
const usersControllers = require('./../controllers/usersController')

const Router = express.Router();

Router.get("/", usersControllers.getAllUsers);
Router.get("/:id", usersControllers.getUser);
Router.post("/", usersControllers.createUser);
Router.patch("/:id", usersControllers.updateUser);
Router.delete("/:id", usersControllers.deleteUser);

module.exports = Router;