// Requires
const mongoose = require('mongoose')

// Model
const whateverSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    date_created: { type: Date, default: Date.now() }
})

// Export
module.exports = mongoose.model('Whatever', whateverSchema)
