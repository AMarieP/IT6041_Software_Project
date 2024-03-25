const mongoose = require('mongoose')

const Schema = mongoose.Schema

const matteboardSchema = new Schema ({
    name: {
        type: String,
        required: True
    },
    thickness: {
        type: String
    },
    colours: [{
        type: String
    }],
    finish: {
        type: String
    },
    material: {
        type: String
    },
    description: {
        type: String
    },    
}, { timestamp: true }) //creates timestamp property when new document is created

module.exports = mongoose.model('Matteboard', matteboardSchema)