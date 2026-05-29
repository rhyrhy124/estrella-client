const Article = require("../models/Article");

// GET ALL
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE
const createArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    const articles = await Article.find();
    res.status(201).json({ articles });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE
const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    const articles = await Article.find();
    res.json({ articles });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE / DISABLE
const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);

    const articles = await Article.find();
    res.json({
      message: "Article deleted successfully",
      articles
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};