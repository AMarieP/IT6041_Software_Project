const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Reuse the image schema across models
const imageSchema = new Schema ({
    name: String,
    alt: String, //Alt text for the image
    url: String, //This is the actual path to the image
    order: Number, //This sets the order of display the images are in. 

}, { timestamp: true })


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
    images: [imageSchema],
    
}, { timestamp: true }) //creates timestamp property when new document is created

module.exports = mongoose.model('Moulding', mouldingSchema)