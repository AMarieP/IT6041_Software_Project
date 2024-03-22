const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mouldingModel = new Schema ({
    name: {
        type: String,
        required: True
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
    dateCreated: {
        type: Date,
        default: Date.now
    },
    
})