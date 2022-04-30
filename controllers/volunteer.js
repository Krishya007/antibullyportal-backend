const volunteer = require("../models/volunteer");

exports.addVolunteer = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) return res.status(400).send("MISSING INFO");
  const v = new volunteer(req.body);

  try {
    await v.save();
    return res.send({ ok: true });
  } catch (e) {
    return res.send({ err: e });
  }
};

exports.getVolunteers = async (req, res) => {
  try {
    res.send(await volunteer.find({}));
  } catch (e) {
    res.send({ err: e });
  }
};
