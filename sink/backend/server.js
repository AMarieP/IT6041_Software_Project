require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

//route import
const stockRoutes = require('./routes/stock')
const matteboardRoutes = require('./routes/matteboard')
const mouldingRoutes = require('./routes/moulding')

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/stock', stockRoutes)
app.use('/api/matteboard', matteboardRoutes)
app.use('api/moulding', mouldingRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to db & listeneing on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })



