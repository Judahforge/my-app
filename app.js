const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 DevOps Pipeline built by judah oyekunle is Live!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;