const router = require('express').Router()
const ctrls = require('../controllers/hotel')
router.post('/', ctrls.createOne)
router.put('/:hid', ctrls.updateById)
router.delete('/:hid', ctrls.deleteById)
router.get('/:hid', ctrls.getById)
router.get('/', ctrls.getAll)


module.exports = router