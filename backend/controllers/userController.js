const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// Wrap it in asynHandler that will handle acceptions

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    // destruct the respone
    const { name, email, password } = req.body

if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please fill in all fields')
}

    res.json({message: 'Register User'})
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login User'})
})

// @desc    Get user user
// @route   GET /api/users/me
// @access  Public
const getMe = asyncHandler(async (req, res) => {
    res.json({message: 'User data information'})
})


module.exports = {
    registerUser,
    loginUser,
    getMe
}