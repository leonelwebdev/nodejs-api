// Requires
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.json())
app.use(cors())
app.use('/api', require('./router/router'))

// Set Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Start server
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
