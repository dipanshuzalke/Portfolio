require("dotenv").config();

const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);
// app.use("/register", router);

// app.get("/", (req, res) => {
//     res.send("Welcome");
// });

connectDb().then(() => {
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
});
