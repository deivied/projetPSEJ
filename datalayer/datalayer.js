const mongoose = require('mongoose');
const urlMongod = "mongodb://localhost:27017/db"

const connectionDB = async () => {
    try {
        await mongoose.connect(urlMongod);
        console.log("Successfully connected to the database");
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    connectionDB,
}