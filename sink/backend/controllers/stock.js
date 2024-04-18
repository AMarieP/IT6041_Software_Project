const Stock = require('../models/stockModel')
const mongoose = require('mongoose')

//GET All Stock Sorted by Date of Creation
const getAllStock = async (req, res) => {

    try{
        const stock = await Stock.find({}).sort({createdAt : 'asc'}) //sort by date of creation, other sort funtionality done by JS
        console.log('Getting Stock')
        res.status(200).json(stock)//return stock as JSON

    }catch(err){
        res.status(400).json({err: err.message })
    }
}

//GET ONE Get One Stock by ID
const getOneStockByID = async (req, res) => {
    const stockID = req.params.id

    try{
        
        //Test if ID is Valid before looking for Stock
        if(!mongoose.Types.ObjectId.isValid(stockID)){
            return res.status(404).json({err: "This Stock ID is Invalid"})
        }
        
        //Find the stock by ID
        const stock = await Stock.findOne({ _id: stockID});
        
        //Error handling if does not exist, but ID is Valid - issues iwth this as will stil crash
        if(!stock){
            return res.status(404).json("This item of stock does not exist")
        }
        res.status(200).json(stock)

    }catch(err) {
        res.status(400).json({err: err.message })
    }

}


//NEW Create New Stock 
const createStock = async (req, res) => {
    const newStock = new Stock(req.body);

    try {
        await newStock.save();
        res.status(200).json(newStock)
        
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//DELETE Delete Stock By ID
const deleteStock = async (req, res) => {
    const stockID = req.params.id

    try{
        
        //Test if ID is Valid before looking for Stock
        if(!mongoose.Types.ObjectId.isValid(stockID)){
            return res.status(404).json({err: "This Stock ID is Invalid"})
        }
        
        const document = await Stock.findByIdAndDelete(stockID)
        console.log("Stock to be deleted: ", document)

        if(!document) { //Error handle if stock unfound
            return res.status(404).send("Stock Unfound, unable to delete.")
        }
        res.status(204).json(`Stock with ID ${req.body.id} deleted`) //this message will not appear, need to have this fixed. But funtion works sucessfully

    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


//UPDATE Update Existing Stock
const updateStock = async (req, res) => {
    const updates = req.body
    
    try{ 
        
        //Test if ID is Valid before looking for Stock
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({err: "This Stock ID is Invalid"})
        }

        const document = await Stock.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true}
        )

        if(!document){
            return res.status(404).json({err: "Stock to be updated unfound, cannot be updated."})
        }

        await document.save()
        res.status(200).send(document)
        
    }catch(err) {
        res.status(500).json({err: err.message})
    }
}

//search stock given name and statuse(category)
const searchStock = async (req, res) => {
    const search = req.body.search;
    const checkedItems = req.body.checkedItems || [];
  

        let query = {};
        if (checkedItems.length > 0) {
        query = {
            $and: [
            { Status: { $in: checkedItems } }, // Items with selected categories
            {
                $or: [
                { name: { $regex: `${search}`, $options: 'i' } }, // Case-insensitive text search
                { artist: { $regex: `${search}`, $options: 'i' } }, // Case-insensitive text search
                ],
            },
            ],
        };
        } else {
        query = {
            $or: [
                { name: { $regex: `${search}`, $options: 'i' } }, // Case-insensitive text search
                { artist: { $regex: `${search}`, $options: 'i' } }, // Case-insensitive text search
            ],
        };
        }
  
    try {
      const results = await Stock.find(query);
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }



module.exports = {
    createStock,
    getAllStock,
    getOneStockByID,
    updateStock,
    deleteStock,
    searchStock
}