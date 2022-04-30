const express = require("express");
const {
  addArticle,
  getAllArticles,
  getOneArticle,
} = require("../controllers/article");

const router = express.Router();

router.post("/add-article", addArticle);
router.get("/articles", getAllArticles);
router.get("/a/:id", getOneArticle);

module.exports = router;
