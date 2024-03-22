const mongoose = require('mongoose')


const connectDB = async() => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {dbName : "EcommerceData"})
        console.log(`DB connection successfull ${conn.connection.host}`)
    } catch (error) {
        console.log("DB connection failed")
    }
}

module.exports = connectDB