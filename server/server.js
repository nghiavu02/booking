const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000
const cookieParser = require('cookie-parser')
const db = require('./config/db.connect')
const initRoutes = require('./routes/index')
const app = express()
db.connect()
//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
initRoutes(app)

app.get((req, res) =>{
    console.log('Khong hop le')
})

app.listen(port, () =>{
    console.log(`Server running on the port ${port}`)
})