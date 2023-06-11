const mongoose = require("mongoose");

// create connection
const mongoDBConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDb Connected Successfully`.bgYellow.blue.bold);
    } catch (error) {
        console.log(`${error.message}`.bgRed.bold);
    }
}

// module export
module.exports = mongoDBConnection