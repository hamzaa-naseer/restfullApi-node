const express = require("express");

const router = express.require();

router.get("/genre", (req, res) => {
  res.send("genre get method");
});

router.post("/genre", (req, res) => {
  res.send("genre post method");
});

module.exports = router;
