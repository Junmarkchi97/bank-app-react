const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8000;

const app = express();

app.get("/api/users", (req, res) => {
  res.send("get goals");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
