const express = require("express");
const {
  addArticle,
  getAllArticles,
  removeArticle,
  getOneArticle,
} = require("../controllers/article");

const router = express.Router();

router.post("/add-article", addArticle);
router.get("/articles", getAllArticles);
router.get("/a/:id", getOneArticle);
router.delete("/a/r/:id", removeArticle);

module.exports = router;
