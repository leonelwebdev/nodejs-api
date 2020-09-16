// Requires / Consts
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const path = require('path')
require('./server')
require('dotenv').config()

// Settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/', require('./router/viewsRouter'))
app.use('/api', require('./router/articleRouter'))

// Start server
app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`)
})
