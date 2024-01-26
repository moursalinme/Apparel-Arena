const express = require('express');
const shopController = require('./../controllers/shopController');
const shopAuthController = require('../controllers/shopAuthController');


const router = express.Router();

router.post('/login', shopAuthController.login);
router.post('/signup', shopAuthController.signup);
router.post('/forgotPassword', shopAuthController.forgotPassword);
router.patch('/resetPassword/:token', shopAuthController.resetPassword);

router.get('/:id/:category', shopController.getProductByShopAndCategory);

router.use(shopAuthController.protect);
router.patch('/updateMyPassword', shopAuthController.updateMyPassword);
router.get('/me', shopController.getMe);
router.get('/myProducts', shopController.getMyProducts);


// router.get('/', 
//   userAuthController.protect, 
//   userAuthController.restrictTo('admin'), 
//   shopController.getAllShops
// );

// router.get('/me', userAuthController.protect, userController.getMe)

// router.route('/:id')
//   .get(userAuthController.protect, userAuthController.restrictTo('admin'), shopController.fin)
//   .delete(userAuthController.protect, userAuthController.restrictTo('admin'), shopController.deleteShop);


// router
//   .route('/')
//   .get(userAuthController.protect, userAuthController.restrictTo('admin'), userController.getAllUsers);

module.exports = router;