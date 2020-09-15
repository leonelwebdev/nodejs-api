// Requires / Consts
const router = require('express').Router()
const controller = require('../controllers/articleController')

// Routes
router.get('/articles', controller.getArticles)
router.get('/articles/:id', controller.getArticle)
router.post('/articles', controller.createArticle)
router.patch('/articles/:id', controller.updateArticle)
router.delete('/articles/:id', controller.deleteArticle)

// Export
module.exports = router
