// Requires / Consts
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
require('./server')
require('dotenv').config()

// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api', require('./router/router'))

// Start server
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})
