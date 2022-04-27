const express = require("express");
const {
  addReport,
  getReports,
  getOneReport,
  addMrReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/reports", getReports);
router.get("/r/:id", getOneReport);

module.exports = router;
