const express = require('express')
const {
    createStock,
    getAllStock,
    getOneStockByID,
    updateStock,
    deleteStock,
    searchStock
} = require('../controllers/stock')

const router = express.Router()


//GET All Stock 
router.get('/', getAllStock)

//GET One Stock By ID
router.get('/:id', getOneStockByID)

//POST New Stock
router.post('/', createStock)

//PATCH Update One Stock
router.patch('/:id', updateStock)

//DELETE One Stock
router.delete('/:id', deleteStock)

//search stock and post results
router.post('/search', searchStock)

module.exports = router