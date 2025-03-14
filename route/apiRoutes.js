// const express = require('express');
// const router = express.Router();
//          OR
const router = require("express").Router();

const userController = require("../server/user/userController");
const categoryController = require("../server/category/categoryController");
const productController = require("../server/product/productController")

router.post("/register", userController.add);
router.post("/validation/add", categoryController.addCategory);
router.post("/category/getall", categoryController.getAllCategory);
router.post("/category/getsingle", categoryController.singleCategoryData);
router.post("/user/read", userController.readUser);
router.post("/read/single", userController.readSingleUser);

router.post("/product/add", productController.add);
router.post("/product/getall", productController.getallProduct);

module.exports = router;
