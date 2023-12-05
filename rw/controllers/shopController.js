const Product = require('../models/productModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Shop = require('./../models/shopModel');


exports.getMe = catchAsync(async(req, res, next) => {
  const { user } = req;
  user.password = undefined;

  res.status(200).json({
    status: 'success',
    data : user,
  });
});


exports.getMyProducts = catchAsync(async(req, res, next) => {
  const { user }  = req;

  const products = await Product.find({shop: user.id});

  res.status(200).json({
    status: 'success',
    results: products.length,
    products,
  });
});




exports.getAllShops = catchAsync(async (req, res, next) => {
  const allShops = await Shop.find();
  
  res.status(200).json ({
    status: 'success',
    results: allShops.length,
    shops : allShops,
  });
});
 
exports.getShopById = catchAsync(async(req, res, next) => {
  const shop = await Shop.findById(req.params.id);
  if (!shop) {
    return next(new AppError('No Shop found with that id.', 404));
  }

  res.status(200).json({
    status:'success',
    shop, 
  });
});


exports.deleteShop = catchAsync(async(req, res, next) => {
  const shop = await Shop.findByIdAndDelete(req.params.id);
  if (!shop) {
    return next(new AppError('There is no shop with that ID.', 404));
  }
  res.status(200).json({
    status: 'success',
    data : null,
  });
});
