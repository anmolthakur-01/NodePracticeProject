const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/nodePrecticeProject")
  .then(() => console.log("Database Connected!"))
  .catch(() => console.log(err));
