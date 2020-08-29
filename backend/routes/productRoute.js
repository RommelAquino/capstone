const router = require('express').Router();
const controller = require('../controllers/productController')

router.get('/', controller.index)

module.exports = router;