const authRouter = require('./auth')
const userRouter = require('./user')
const hotelRouter = require('./hotel')
const roomRouter = require('./room')

const initRoutes = (app) => {
    app.use('/api/auth', authRouter)
    app.use('/api/user', userRouter)
    app.use('/api/hotel', hotelRouter)
    app.use('/api/room', roomRouter)
}

module.exports = initRoutes