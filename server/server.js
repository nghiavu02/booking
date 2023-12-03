const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000
const db = require('./config/db.connect')
const initRoutes = require('./routes/index')
const app = express()
db.connect()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
initRoutes(app)


app.listen(port, () =>{
    console.log(`Server running on the port ${port}`)
})