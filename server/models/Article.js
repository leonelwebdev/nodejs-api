// Requires / Consts
const mongoose = require('mongoose')

// Model
const articleSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true }
})

// Export
module.exports = mongoose.model('Article', articleSchema)
