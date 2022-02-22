const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }
    catch (error) {
        console.log(error)
        //exit the process with failure, therefore pass it a 1
        process.exit(1)
    }
}

module.exports = connectDB
