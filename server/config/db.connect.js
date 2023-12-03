const mongose = require('mongoose')


function connect (){
    try {
        mongose.connect(process.env.MONGO_DB)
        console.log('Kết nối db thành công')
    } catch (error) {
        console.log('Kết nối db thất bại')
    }
    mongose.connection.on('disconnected', () =>{
        console.log("mongodb disconnected")
    })
}
module.exports = {connect}