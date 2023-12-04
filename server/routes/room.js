const router = require('express').Router()
const ctrls = require('../controllers/room')
router.post('/', ctrls.createOne)
router.put('/:rid', ctrls.updateById)
router.delete('/:rid', ctrls.deleteById)
router.get('/:rid', ctrls.getById)
// router.get('/', ctrls.getAll)


module.exports = router