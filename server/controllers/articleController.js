// Requires / Consts
const articleController = { }
const Article = require('../models/Article')

// Functions
articleController.getArticles = async (req, res) => {
    try {
        const articles = await Article.find()
        res.status(200).json(articles)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

articleController.getArticle = async (req, res) => {
    try {
        const article = await Article.find({id: req.params.id})
        res.status(200).json(article)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

articleController.createArticle = async (req, res) => {
    try {
       const article = await new Article(req.body)
       const articles = await Article.find()
       const lastArticleId = articles.slice(-1)[0].id

       article.id = (lastArticleId + 1)
       article.save()

       res.redirect('/articles')
       res.status(201).json(article)
       return
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

articleController.updateArticle = async (req, res) => {
    try {
        const article = (req.body)
        await Article.findOneAndUpdate({id: req.params.id}, {$set: article}, {new: true})
        res.status(200).json(article)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

articleController.deleteArticle = async (req, res) => {
    try {
        const article = await Article.findOneAndRemove({id: req.params.id})
        res.status(200).json(article)
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

// Export
module.exports = articleController
