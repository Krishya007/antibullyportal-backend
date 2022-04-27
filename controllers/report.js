const report = require("../models/report");
const mrisReport = require("../models/mrisReports");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GM_EMAIL,
    pass: process.env.GM_PASSW,
  },
});

exports.addReport = async (req, res) => {
  const { victimName, incidentDesc, expectations } = req.body;
  if (!victimName || !incidentDesc || !expectations)
    return res.status(400).send("MISSING INFO");

  const r = new report(req.body);

  try {
    await r.save();
    console.log("DONE");
    return res.json({ ok: true });
  } catch (e) {
    console.log(e);
    return res.json({ err: e });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await report.find({});
    res.send(reports);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getOneReport = async (req, res) => {
  try {
    const id = req.params.id;
    const r = await report.findOne({ _id: id }).exec();
    return res.send(r);
  } catch (e) {
    return res.status(404).send(e);
  }
};

const mrisBranches = {
  mris_cw: {
    name: "Manav Rachna International School, Charmwood, Faridabad",
    email: "  mriscw.antibullyportal@gmail.com",
  },
  mris_14: {
    name: "Manav Rachna International School, Sector-14, Faridabad",
    email: "",
  },
  mris_21: {
    name: "Manav Rachna International School, Sector-21C, Faridabad",
    email: "",
  },
  mris_46: {
    name: "Manav Rachna International School, Sector-46, Gurugram",
    email: "",
  },
  mris_51_g: {
    name: "Manav Rachna International School, Sector-51, Gurugram",
    email: "",
  },
  mris_51_n: {
    name: "Manav Rachna International School, Sector-51, Noida",
    email: "",
  },
  mris_l: { name: "Manav Rachna International School, Ludhiana", email: "" },
  mris_m: { name: "Manav Rachna International School, Mohali", email: "" },
};

exports.addMrReport = async (req, res) => {
  let { branch, incident, whoWasBullied, whoWasBully, reporter } = req.body;
  console.log(branch);
  if (!branch || !incident || !whoWasBullied || !whoWasBully || !reporter)
    return res.status(400).send("MISSING INFO");

  let branch_name = mrisBranches[branch].name;
  let branch_email = mrisBranches[branch].email;

  const mailOptions = {
    from: process.env.GM_EMAIL,
    to: branch_email,
    subject: `Bullying Report - ${branch_name}`,
    text: `A bullying report was made!\nReporter's Identity - ${reporter} \n${whoWasBullied} was/were bullied by ${whoWasBully} and the incident description is\n${incident}\n\n---THE-END---`,
  };

  transporter.sendMail(mailOptions, function (er, info) {
    if (er) {
      res.send(er);
      console.log(er);
    } else {
      console.log("sent");
    }
  });
};
