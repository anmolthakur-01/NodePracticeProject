// const express = require('express');
// const router = express.Router();
//          OR
const router = require("express").Router();

const userController = require("../server/user/userController");

router.post("/register", userController.add);

module.exports = router;
