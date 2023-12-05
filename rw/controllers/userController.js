const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel');

exports.getAllUsers = catchAsync(async (req, res, next) => {
    const allUsers = await User.find();
    res.status(200).json ({
      status: 'success',
      results : allUsers.length,
      data : {
        allUsers,
      },
    });
});


exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(new AppError(`No user found with id : ${req.params.id}`, 404));
  }
  
  res.status(200).json({
    status:'Success',
    message: "User Found XD",
    user,
  });
})

exports.getMe = (req, res, next) => {
  const { user } = req;
  user.password = undefined;
  console.log(user);

  res.status(200).json({
    status: 'success',
    user,
  });
}

exports.deleteUser = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new AppError('No User Found with that id!', 404));
  }

  res.status(200).json({
    status: 'Success',
    message : "Succesfully Deleted User",
    data : null,
  });

});

