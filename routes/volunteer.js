const express = require("express");
const { addVolunteer, getVolunteers } = require("../controllers/volunteer");

const router = express.Router();

router.post("/add-volunteer", addVolunteer);
router.get("/get-volunteers", getVolunteers);

module.exports = router;
