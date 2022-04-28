const express = require("express");
const {
  addVolunteer,
  removeVolunteer,
  getVolunteers,
} = require("../controllers/volunteer");

const router = express.Router();

router.post("/add-volunteer", addVolunteer);
router.post("/r/v/:id", removeVolunteer);
router.get("/get-volunteers", getVolunteers);

module.exports = router;
