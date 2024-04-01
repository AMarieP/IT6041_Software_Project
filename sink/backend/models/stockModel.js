const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema ({
    name: { 
        type: String,
        required: true
    },
    date: { 
        type: String, //date not type: Date as string allows more flexibility
    },
    dimensions: {
        type: String,
    },
    artist: {
        type: String,
        default: 'Unknown'
    },
    medium: [{
        type: String,
    }],
    description: {
        type: String
    },
    images: [{
        type: String,
    }]

}, { timestamp: true }) //creates timestamp property when new document is created


module.exports = mongoose.model('Stock', stockSchema)