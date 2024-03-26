const Moulding = require('../models/mouldingModel')
const mongoose = require('mongoose')

//GET All moulding Sorted by Date of Creation
const getAllMoulding = async (req, res) => {

    try{
        const moulding = await Moulding.find({}).sort({createdAt : 'asc'}) //sort by date of creation, other sort funtionality done by JS
        console.log('Getting moulding')
        res.status(200).json(moulding)//return moulding as JSON

    }catch(err){
        res.status(400).json({err: err.message })
    }
}

//GET ONE Get One moulding by ID
const getOneMouldingByID = async (req, res) => {
    const mouldingID = req.params.id

    try{
        
        //Test if ID is Valid before looking for moulding
        if(!mongoose.Types.ObjectId.isValid(mouldingID)){
            return res.status(404).json({err: "This moulding ID is Invalid"})
        }
        
        //Find the moulding by ID
        const moulding = await Moulding.findOne({ _id: mouldingID});
        
        //Error handling if does not exist, but ID is Valid - issues iwth this as will stil crash
        if(!moulding){
            res.status(404).json("This item of moulding does not exist")
        }
        res.status(200).json(moulding)

    }catch(err) {
        res.status(400).json({err: err.message })
    }

}


//NEW Create New moulding 
const createMoulding = async (req, res) => {
    const newMoulding = new Moulding(req.body);

    try {
        await newMoulding.save();
        res.status(200).json(newMoulding)
        
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//DELETE Delete moulding By ID
const deleteMoulding = async (req, res) => {
    const mouldingID = req.params.id

    try{
        
        //Test if ID is Valid before looking for moulding
        if(!mongoose.Types.ObjectId.isValid(mouldingID)){
            return res.status(404).json({err: "This moulding ID is Invalid"})
        }
        
        const document = await Moulding.findByIdAndDelete(mouldingID)
        console.log("Moulding to be deleted: ", document)

        if(!document) { //Error handle if moulding unfound
            return res.status(404).send("Moulding unfound, unable to delete.")
        }
        res.status(204).json(`Moulding with ID ${req.body.id} deleted`) //this message will not appear, need to have this fixed. But funtion works sucessfully

    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


//UPDATE Update Existing moulding
const updateMoulding = async (req, res) => {
    const updates = req.body
    
    try{ 
        
        //Test if ID is Valid before looking for moulding
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({err: "This moulding ID is Invalid"})
        }

        const document = await Moulding.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true}
        )

        if(!document){
            return res.status(404).json({err: "Moulding to be updated unfound, cannot be updated."})
        }

        await document.save()
        res.status(200).send(document)
        
    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


module.exports = {
    createMoulding,
    getAllMoulding,
    getOneMouldingByID,
    updateMoulding,
    deleteMoulding
}