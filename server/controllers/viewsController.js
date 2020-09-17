// Requires / Consts
const viewsController = { }
const Article = require('../models/Article')

// Functions
viewsController.getArticlesView = async (req, res) => {
    try {
        const articles = await Article.find()
        res.render('index', { articles: articles, title: 'Add an article' })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

viewsController.getArticleView = async (req, res) => {
    try {
        const article = await Article.find({ id: req.params.id })
        res.render('article', { article: article[0] })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

viewsController.getApiView = async (req, res) => {
    try {
        const articles = await Article.find()
        res.render('api', { articles: articles, title: 'API Docs' })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

viewsController.getAboutView = (req, res) => {
    try {
        res.render('about', { title: 'About' })
    } catch (err) {
        res.status(400).send({ message: err.message })
    }
}

// Export
module.exports = viewsController
