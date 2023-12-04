const User = require('../model/user')
const asyncHandler = require('express-async-handler')
const updateById = asyncHandler(async(req, res) =>{  
    const {uid} = req.user
    if(Object.keys(req.body).length == 0 || !uid){
        throw new Error('Missing inputs')
    }
    const rs = await User.findByIdAndUpdate(uid, req.body, {new: true})
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'Thành công' : 'Thất bại',
        data: rs
    })
})
const deleteById = asyncHandler(async(req, res) =>{
    const {uid} = req.user
    if( !uid){
        throw new Error('Missing inputs')
    }
    const rs = await User.findByIdAndDelete(uid)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'Thành công' : 'Thất bại',
        data: rs
    })
})
const getById = asyncHandler(async(req, res) =>{
    const {uid} = req.user
    if( !uid){
        throw new Error('Missing inputs')
    }
    const rs = await User.findById(uid)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'Thành công' : 'Thất bại',
        data: rs
    })
})
const getAll = asyncHandler(async(req, res) =>{
    const rs = await User.find()
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'Thành công' : 'Thất bại',
        data: rs
    })
})

module.exports = {
    getById,
    getAll,
    updateById,
    deleteById
}