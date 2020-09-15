// Requires / Consts
require('dotenv').config()
const mongoose = require('mongoose')
const DB_URI = process.env.DB_URI

// Server connection
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false },
    () => {
    try {
        console.log('DB connection completed')
    } catch (err) {
        console.log(err)
    }
})

// Export
module.exports = mongoose
