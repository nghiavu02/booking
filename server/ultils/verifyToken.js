const jwt = require('jsonwebtoken')

const verifyAccessToken = (req, res, next) =>{
    const token = req.cookies.access_token
    console.log(token)
    if(!token) throw new Error('Token khong hop le')

    jwt.verify(token, process.env.JWT, (err, decoded) =>{
        if(err) throw new Error('Lỗi xác thực token')
        req.user = decoded
        next()
    })
}

const verifyAdmin = (req, res, next) =>{
        if(req.user.isAdmin){
            next()
        }else{
            throw new Error('Quyền này chỉ dành cho quản trị viên')
        }
}

module.exports = {
    verifyAccessToken,
    verifyAdmin
}