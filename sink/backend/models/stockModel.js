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
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    }

    
    
})