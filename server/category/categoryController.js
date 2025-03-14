const Category = require("./categoryModel");

const addCategory = (req, res) => {
  //  validation check start, if we want to add check-validation to input data, we only insert if part in code
  var validationerror = [];
  if (!req.body.categoryName) validationerror.push("categoryName is required");
  if (!req.body.description) validationerror.push("description is required");

  if (validationerror.length) {
    res.send({
      status: false,
      status: 420,
      message: "validation error occur",
      error: validationerror,
    });
  } // validation end
  else {
    // else part's for only data insertion
    const categoryObj = Category();
    categoryObj.categoryName = req.body.categoryName;
    categoryObj.description = req.body.description;
    categoryObj.save()
      .then((saveData) => {
        res.send({
          status: true,
          message: "data added successful!",
          data: saveData,
        });
      })
      .catch((err) => {
        res.send({
          status: false,
          message: "Internal error occur",
          error: err.message,
        });
      });
  }
};

//create api to read data
const getAllCategory = (req, res) => {
  Category.find()
    .then((categoryData) => {
      if (!categoryData) {
        res.send({
          status: 404,
          success: false,
          message: "Data not found",
          data: categoryData,
        });
      } else {
        res.send({
          status: 200,
          success: true,
          message: "Data loaded",
          data: categoryData,
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

// create api to read perticular category data
const singleCategoryData = (req, res) => {
  Category.findOne({ _id: req.body._id })
    .then((data) => {
      res.send({
        status: true,
        message: "data loaded",
        data: data,
      });
    })
    .catch((err) => {
      res.send({
        status: false,
        message: "Internal sever error",
        error: err.message,
      });
    });
};

module.exports = { addCategory, getAllCategory, singleCategoryData };
