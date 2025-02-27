const express = require("express");
const app = express();

const db = require("./config/db");
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

const adminroutes = require("./route/apiRoutes");
app.use("/api", adminroutes);

app.get("/", function (req, res) {
  res.send("Welcome to pratice project");
});

app.listen(3000, (err) => {
  if (err) throw err;
  else {
    console.log("server running at", 3000);
  }
});
