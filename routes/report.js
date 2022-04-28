const express = require("express");
const {
  addReport,
  getReports,
  getOneReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/reports", getReports);
router.get("/r/:id", getOneReport);
router.get("/r/r/:id", removeReport);

module.exports = router;
