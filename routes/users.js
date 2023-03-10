const express = require("express");
const route = express.Router();

const usersController = require("../controllers/users");
const authCheck = require("../middlewares/authCheck");

// const userChek = require('../middlewares')

route.get("/me", authCheck, usersController.getUser);
route.get("/:userId", authCheck, usersController.getById);
route.put("/:userId", usersController.updateUser);
route.post("/:userId", usersController.updateUser);

module.exports = route;
