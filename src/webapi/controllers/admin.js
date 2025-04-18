import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';

// @desc    Get all users
// @route   GET /api/v1/admin/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res, next) => {
  console.log('Getting all users for admin role');
  return res.status(200).json(res.advancedResults);
});

// @desc    Get single user
// @route   GET /api/v1/admin/users/:id
// @access  Private/Admin
const getUser = asyncHandler(async (req, res, next) => {
  let userId = req.params.id;

  const user = await User.findById(userId);

  if (!user) {
    return next(new ErrorResponse(`User not found with id of ${userId}`, 404));
  }

  return res.status(200).json({ success: true, data: user });
});

// @desc    Create user
// @route   POST /api/v1/admin/users
// @access  Private/Admin
const createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  return res.status(201).json({ success: true, data: user });
});

// @desc    Update user
// @route   PUT /api/v1/admin/users/:id
// @access  Private
const updateUser = asyncHandler(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    return next(new ErrorResponse(`User ${user} not found`, 404));
  }

  return res.status(200).json({ success: true, data: user });
});

// @desc    Delete user
// @route   DELETE /api/v1/admin/users/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res, next) => {
  let user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new ErrorResponse(`User ${user} not found`, 404));
  }

  return res.status(200).json({ success: true, data: {} });
});

export { getUsers, getUser, createUser, updateUser, deleteUser };
