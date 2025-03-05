const Product = require("./productModel");

add = (req, res) => {
  var validationerror = [];
  if (!req.body.name) validationerror.push("Name is required");

  if (!req.body.price) validationerror.push("Price is required");

  if (!req.body.description) validationerror.push("Description is required");

  if (!req.body.categoryId) validationerror.push("Category ID is required");

  if (validationerror.length > 0) {
    res.send({
      status: 420,
      success: false,
      message: "Validation failed",
      errors: validationerror,
    });
  } else {
    let productObj = new Product();
    productObj.name = req.body.name;
    productObj.price = req.body.price;
    productObj.description = req.body.description;
    productObj.categoryId = req.body.categoryId;
    productObj
      .save()
      .then((data) => {
        if (!data) {
          res.send({
            status: 404,
            success: false,
            message: "Product could not be created",
            data: data,
          });
        } else {
          res.send({
            status: 200,
            success: true,
            message: "Product created successfully",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.send({
          status: 500,
          success: false,
          message: "Internal server error",
          error: err.message,
        });
      });
  }
};

const getallProduct = (req, res) => {
  Product.find()
    .populate("categoryId")
    .then((data) => {
      if (!data) {
        res.send({
          status: 404,
          success: false,
          message: "No products found",
        });
      } else {
        res.send({
          status: 200,
          success: true,
          message: "Products retrieved successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.send({
        status: 500,
        success: false,
        message: "Internal server error",
        error: err.message,
      });
    });
};

module.exports = { add, getallProduct };
