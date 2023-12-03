const Hotel = require('../model/hotel')
const asyncHandler = require('express-async-handler')
//C:    CREATE
const createOne = asyncHandler(async(req, res) =>{
    if(Object.keys(req.body)) throw new Error('Mising inputs')
    const rs = await Hotel.create(req.body)
    return res.status(200).json({
        success: rs ? true: false,
        message: rs ? 'thành công' : 'thất bại',
        data: rs
    })
})