const mongoose = require('mongoose')

const Schema = mongoose.Schema

const matteboard = new Schema ({
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
    dateCreated: {
        type: Date,
        default: Date.now
    },
    
})