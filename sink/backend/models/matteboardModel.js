const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Reuse the image schema across models
const imageSchema = new Schema ({
    name: String,
    alt: String, //Alt text for the image
    url: String, //This is the actual path to the image

}, { timestamp: true })


const matteboardSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    depth: {
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
    archived: {
        type: String
    },
    images: [imageSchema],

}, { timestamp: true }) //creates timestamp property when new document is created

module.exports = mongoose.model('Matteboard', matteboardSchema)