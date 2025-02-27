const User = require("./userModel");

// ek app naam ke api bna lee, jismei user data ke liye request bhejne hai
let add = (req, res) => {
  const userObj = User();
  userObj.name = req.body.name;
  userObj.email = req.body.email;
  userObj.password = req.body.password;

  // save() predefined method hai jo userObj ka data save karega
  userObj.save()
  .then((saveData) => {
      res.send({
        status: true,
        massage: "User added successfully",
        data: saveData,
      })
      .catch({
        status: false,
        message: "Internal error occur",
        error: err.massage,
      });
  });
};

// add ko curly braces ke andar likhne se vo apiRouter.js ke file me jab post method use krege to usme callback function nhi mangega
module.exports = {add};