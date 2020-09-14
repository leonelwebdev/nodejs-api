// Requires
const router = require('express').Router()
const controller = require('../controllers/controller')

// Routes
router.get('/names', controller.getNames)
router.get('/secondnames', controller.getSecondNames)
router.get('/lastnames', controller.getLastnames)
router.get('/', controller.getIndexView)

// Export
module.exports = router
