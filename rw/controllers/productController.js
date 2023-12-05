const catchAsync = require('../utils/catchAsync');
const Product = require('./../models/productModel');
const AppError = require('./../utils/appError');

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find().populate('shop');
  res.status(200).json({
    status: 'success',
    data: products,
  });
}); 

// exports.protect = catchAsync(async)


exports.addProduct = catchAsync(async (req, res, next) => {

  const { user } = req;

  if (!user.verified) {
    return next(new AppError('Please verify your shop to add product.', 400));
  }

  const product = {
    name : req.body.name,
    category: req.body.category,
    price : req.body.price,
    shop : req.user._id,    
  };
  console.log(product);
  if (req.body.discount) product.discount = req.body.discount;

  const saved = await Product.create(product);
  
  res.status(200).json({
    status: 'success',
    data: saved, 
  });
});

exports.updateProductById = catchAsync(async (req, res, next) => {
  // if (req.params.id)
  res.status(200).json({
    status: 'success',
    message: 'This route is not completed yet.',
  });
});