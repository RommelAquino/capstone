const router = require('express').Router();
const controller = require('../controllers/productController')

router.get('/product/:id', controller.show)
router.get('/', controller.index)
router.post('/', controller.create)
router.put('/product/:id', controller.update)
router.delete('/product/:id', controller.destroy)

module.exports = router;