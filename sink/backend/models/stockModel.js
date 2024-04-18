const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Reuse the image schema across models
const imageSchema = new Schema ({
    name: String,
    alt: String, //Alt text for the image
    url: String, //This is the actual path to the image

}, { timestamp: true })


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
    status:{
        type: String,
    },
    price: {
        type: String,
    },
    
    images: [imageSchema],

}, { timestamp: true }) //creates timestamp property when new document is created


module.exports = mongoose.model('Stock', stockSchema)