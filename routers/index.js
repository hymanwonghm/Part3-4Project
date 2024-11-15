const { Router } = require('express')
const { indexController, deleteController, insertController,availabilityController,outController } = require('../controllers')
const router = Router()

router.route('/').get(indexController)
router.route('/delete/:id').get(deleteController)
router.route('/add').get(insertController)
router.route('/availability/:id').get(availabilityController)
router.route('/out/:id').get(outController)
module.exports = { router}