const mongoose = require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema ({
    name: String,
    desc: String,
    img: {
        data: Buffer,
        contentType: String
    }


}, { timestamp: true }) //creates timestamp property when new document is created


module.exports = mongoose.model('Stock', imageSchema)