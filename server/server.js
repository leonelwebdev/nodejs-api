// Requires
const mongoose = require('mongoose')
const DB_URI = ''

// Server
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    try {
        console.log('DB connection completed')
    } catch (err) {
        console.log(err)
    }
})

// Export
module.exports = mongoose
