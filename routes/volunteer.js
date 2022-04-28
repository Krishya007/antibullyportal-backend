const express = require("express");
const { addVolunteer, removeVolunteer } = require("../controllers/volunteer");

const router = express.Router();

router.post("/add-volunteer", addVolunteer);
router.post("/r/v", removeVolunteer);

module.exports = router;
