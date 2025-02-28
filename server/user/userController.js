const User = require("./userModel");

let add = (req, res) => {
  // ek app naam ke api bna lee, jismei user data ke liye request bhejne hai
  const userObj = User();
  userObj.name = req.body.name;
  userObj.email = req.body.email;
  userObj.password = req.body.password;
  userObj
    .save() // save() predefined method hai jo userObj ka data save karega
    .then((saveData) => {
      res.send({
        status: true,
        massage: "User added successfully",
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
};

// add ko curly braces ke andar likhne se vo apiRouter.js ke file me jab post method use krege to usme callback function nhi mangega
module.exports = { add };
