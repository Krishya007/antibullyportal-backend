const express = require("express");
const { addVolunteer } = require("../controllers/volunteer");

const router = express.Router();

router.post("/add-volunteer", addVolunteer);

module.exports = router;
