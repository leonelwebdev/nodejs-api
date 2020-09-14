// Requires
const mongoose = require('mongoose')
const DB_URI = 'mongodb://localhost:27017/articles'

// Server
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
    try {
        console.log('DB connection completed')
    } catch (err) {
        console.log(err)
    }
})

// Export
module.exports = mongoose
