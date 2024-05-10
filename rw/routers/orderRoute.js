const express = require('express');

const router = express.Router();
const orderController = require('../controllers/orderController');
const userAuthController = require('../controllers/userAuthController')

router.get('/:id', 
                userAuthController.protect,  
                orderController.viewOrderById
            );

router.post('/placeOrder',
            userAuthController.protect,
            userAuthController.restrictTo('user'),
            orderController.placeOrder
        );


// router.get('/view/:id', 
          // userAuthController.restrictTo('admin'), 
          // orderController.viewOrder);


          
// router.get('/myorders', userAuthController.protect, orderController.getUserOrders);
// TODO: MyOrders from user and Shops,


// TODO: Stripe Payment.

module.exports = router;