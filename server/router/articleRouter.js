// Requires / Consts
const router = require('express').Router()
const articleController = require('../controllers/articleController')

// Routes
router.get('/articles', articleController.getArticles)
router.get('/articles/:id', articleController.getArticle)
router.post('/articles', articleController.createArticle)
router.patch('/articles/:id', articleController.updateArticle)
router.delete('/articles/:id', articleController.deleteArticle)

// Export
module.exports = router
