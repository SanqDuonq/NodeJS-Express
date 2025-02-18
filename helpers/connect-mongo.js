const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.URI_MONGODB)
        console.log(`Connect success ${connect.connection.host}`)
    } catch (error) {
        console.log(`Error ${error}`)
        process.exit(1)
    }
}

module.exports = {
    connectDB
}