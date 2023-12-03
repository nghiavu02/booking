const router = require('express').Router()
const ctrls = require('../controllers/auth')
router.post('/register', ctrls.register)

module.exports = router