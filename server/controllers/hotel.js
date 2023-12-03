const Hotel = require('../model/hotel')
const asyncHandler = require('express-async-handler')
const { findByIdAndUpdate } = require('../model/room')
//C:    CREATE
const createOne = asyncHandler(async(req, res) =>{
    if(Object.keys(req.body).length == 0) throw new Error('Mising inputs')
    const rs = await Hotel.create(req.body)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})

//R: GET BY ID
const getById = asyncHandler(async(req, res) =>{
    const {hid} = req.params
    if(!hid) throw new Error('Mising inputs')
    const rs = await Hotel.findById(hid)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})
//R: GET ALL
const getAll = asyncHandler(async(req, res) =>{
    const {min, max, ...others} = req.query
    const rs = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})

//U: UPDATE
const updateById = asyncHandler(async(req, res) =>{
    const {hid} = req.params
    if(!hid) throw new Error('Mising inputs')
    const rs = await findByIdAndUpdate(hid, req.body, {new: true})
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})

//D: DELETE
const deleteById = asyncHandler(async(req, res) =>{
    const {hid} = req.params
    if(!hid)  throw new Error('Missing inputs')
    const rs = await Hotel.findByIdAndDelete(hid)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'xóa thành công' : 'xóa thất bại',
    })
})


module.exports = {
    createOne,
    getById,
    getAll,
    updateById,
    deleteById
}