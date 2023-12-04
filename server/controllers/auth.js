const User = require('../model/user')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { use } = require('../routes/auth')
const register = asyncHandler(async(req, res) =>{
    if(Object.keys(req.body).length == 0) throw new Error('Missing inputs')
    const salt =await bcrypt.genSaltSync(10)
    const hash =await bcrypt.hash(req.body.password, salt)
    const newUser = new User({
        ...req.body,
        password: hash
    })
    const rs = await newUser.save()
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})

const login = asyncHandler(async(req, res) =>{
    if(Object.keys(req.body).length == 0) throw new Error('Missing inputs')
    const user = await User.findOne({username: req.body.username})
    if(!user) throw new Error('User not found')
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect) throw new Error('Không hợp lệ')
    const token = jwt.sign({uid: user._id, isAdmin: user.isAdmin}, process.env.JWT);

    const {password, isAdmin, ...otherUser} = user.toObject()
    return res.cookie('access_token', token, {httpOnly: true}).status(200).json({
        success: user ? true: false,
        message: user ? 'thành công' : 'thất bại',
        data: otherUser
    })
})


module.exports = {
    register,
    login
}