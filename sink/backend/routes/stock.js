const express = require('express')
const router = express.Router()


//GET All Stock 
router.get('/', (req, res) => {
    res.json({mssg: "GET all art stock"})
})

//GET One Stock By ID
router.get('/:id', (req, res) => {
    res.json({mssg: "GET all art stock"})
})

//POST New Stock
router.post('/', (req, res) => {
    res.json({mssg: "Create New Stock"})
})

//DELETE One Stock
router.delete('/', (req, res) => {
    res.json({mssg: "Delete One Stock"})
})

//PATCH Update One Stock
router.patch('/', (req, res) => {
    res.json({mssg: "Update One Stock"})
})

module.exports = router