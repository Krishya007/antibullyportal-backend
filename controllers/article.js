const article = require("../models/article");

exports.addArticle = async (req, res) => {
  const { title, brief, body, author } = req.body;
  if (!title || !brief || !body || !author)
    return res.status(400).send("MISSING INFO");
  const a = new article(req.body);

  try {
    await a.save();
    return res.send({ ok: true });
  } catch (e) {
    return res.send({ err: e });
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    res.send(await article.find({}));
  } catch (e) {
    res.send({ err: e });
  }
};

exports.getOneArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const a = await article.findOne({ _id: id }).exec();
    return res.send(a);
  } catch (e) {
    res.send({ err: e });
  }
};

exports.removeArticle = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).send("MISSING INFO");

  try {
    article.findByIdAndDelete(id);
    res.status({ ok: true });
  } catch (e) {
    return res.send({ err: e });
  }
};
