const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema ({
    name: { 
        type: String,
        required: True
    },
    date: { 
        type: String, //date not type: Date as string allows more flexibility
    },
    dimensions: {
        type: String,
    },
    artist: {
        type: [artistSchema],
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

const artistSchema = new Schema ({
    name: {
        type: String,
        required: True
    },
    dateOfBirth: {
        type: String,
        default: 'Unknown'
    },
    dateOfDeath: {
        type: String,
        default: 'Unknown'
        },
    placeOfBirth: {
        type: String,
        default: 'Unknown'
    },
    description: {
        type: String
    }
}, { timestamp: true })


module.exports = mongoose.model('Stock', stockSchema)