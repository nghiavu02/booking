const User = require('../model/user')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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



module.exports = {
    register
}