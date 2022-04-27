const volunteer = require("../models/volunteer");

exports.addVolunteer = async (req, res) => {
  const { name, email, phone, kidClass, kidSection, why } = req.body;
  if ((!name || !email || !phone || !kidClass, !kidSection, !why))
    return res.status(400).send("MISSING INFO");
  const v = new volunteer(req.body);

  try {
    await v.save();
    return res.send({ ok: true });
  } catch (e) {
    return res.send({ err: e });
  }
};
