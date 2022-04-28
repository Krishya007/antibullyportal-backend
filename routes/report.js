const express = require("express");
const {
  addReport,
  getReports,
  getOneReport,
  removeReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/reports", getReports);
router.get("/r/:id", getOneReport);
router.delete("/r/r/:id", removeReport);

module.exports = router;
