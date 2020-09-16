// Requires / Consts
const router = require('express').Router()
const viewsController = require('../controllers/viewsController')

// Routes
router.get('/', viewsController.getArticlesView)
router.get('/articles', viewsController.getArticlesView)
router.get('/articles/:id', viewsController.getArticleView)
router.get('/api', viewsController.getApiView)
router.get('/about', viewsController.getAboutView)

// Export
module.exports = router
