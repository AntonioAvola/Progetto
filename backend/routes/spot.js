const express       = require('express')
const router         = express.Router()

const SpotController    = require('../controllers/SpotController')

router.get('/ricerva', SpotController.ricerca)

router.get('/ricerca/visualizza', SpotController.visualizza )

module.exports = router