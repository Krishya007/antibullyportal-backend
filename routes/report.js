const express = require("express");
const {
  addReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);

module.exports = router;
