const express = require('express');
const productController = require('./../controllers/productController');
const router = express.Router();
const shopAuthController = require('./../controllers/shopAuthController');

router.get('/getAll', productController.getAllProduct);
router.post('/add', shopAuthController.protect, productController.addProduct);

module.exports = router;