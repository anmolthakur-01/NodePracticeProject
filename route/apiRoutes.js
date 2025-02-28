// const express = require('express');
// const router = express.Router();
//          OR
const router = require("express").Router();

const userController = require("../server/user/userController");
const categoryController = require("../server/category/categoryController");

router.post("/register", userController.add);
router.post("/validation/add", categoryController.addCategory);
router.post("/category/getall", categoryController.getAllCategory);

module.exports = router;
