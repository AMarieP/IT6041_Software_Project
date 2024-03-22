const Stock = require('../models/stockModel')

//GET All Stock Sorted by Date of Creation
const getAllStock = async (req, res) => {
    const stock = await Stock.find({}) //sort by date of creation, other sort funtionality done by JS

    res.status(200).json(stock)
}

//GET ONE Get One Stock by ID
const getOneStockByID = async (req, res) => {
    const thisStockID = req.body.id

    const stock = await Stock.findById(thisStockID)
}


//NEW Create New Stock 
const createStock = async (req, res) => {
    const newStock = req.body //can desctrcu here ideally

    try {
        const stock = await Stock.create({newStock})
        res.status(200).json(stock)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//DELETE Delete Stock By ID
const deleteStock = async (req, res) => {
    const thisStockID = req.body.id

    try{
        const document = await Stock.findByIdAndDelete(thisStockID)
        console.log("Stock to be deleted: ", document)

        if(!document) { //Error handle if stock unfound
            return res.status(404).send("Stock Unfound")
        }
        res.status(204).send(`Stock ID ${req.body.id} deleted`)

    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


//UPDATE Update Existing Stock
const updateStock = async (req, res) => {
    const updates = req.body
    
    try{ 
        const document = await Stock.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true}
        )

        await document.save()
        res.status(200).send(document)
    }catch(err) {
        res.status(500).json({err: err.message})
    }
}



module.exports = {
    createStock,
    getAllStock,
    getOneStockByID,
    updateStock,
    deleteStock
}