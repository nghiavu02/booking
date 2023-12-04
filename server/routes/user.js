const router = require('express').Router()
const {verifyAccessToken, verifyAdmin} = require('../ultils/verifyToken')
const ctrls = require('../controllers/user')
router.put('/:uid',verifyAccessToken, ctrls.updateById)
router.delete('/:uid',verifyAccessToken, ctrls.deleteById)
router.get('/',verifyAccessToken, ctrls.getById)
router.get('/getall', verifyAdmin,ctrls.getAll)



module.exports = router