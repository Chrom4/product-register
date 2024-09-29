const express = require("express");
const router = express.Router();

router.get("/data", (req, res) => {
  const data = ["Item 1", "Item 2", "Item 3"];
  res.json(data);
});

router.post("/add", (req, res) => {
  const data = req.body;
  console.log(data);
});

module.exports = router;
