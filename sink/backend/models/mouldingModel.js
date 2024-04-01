const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mouldingSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    profile: {
        type: String
    },
    finish: {
        type: String
    },
    colour: [{
        type: String
    }],
    timber: [{
        type: String
    }],
    dimensions: {
        type: String
    },
    description: {
        type: String
    },
}, { timestamp: true }) //creates timestamp property when new document is created

module.exports = mongoose.model('Moulding', mouldingSchema)