const express       = require('express')
const router         = express.Router()

const SpotController    = require('../controllers/SpotController')

router.get('/search', SpotController.search)

router.get('/search/showSingle', SpotController.showSingle )

module.exports = router