const Matteboard = require('../models/matteboardModel')
const mongoose = require('mongoose')

//GET All Matteboard Sorted by Date of Creation
const getAllMatteboard = async (req, res) => {

    try{
        const matteboard = await Matteboard.find({}).sort({createdAt : 'asc'}) //sort by date of creation, other sort funtionality done by JS
        console.log('Getting matteboard')
        res.status(200).json(matteboard)//return matteboard as JSON

    }catch(err){
        res.status(400).json({err: err.message })
    }
}

//GET ONE Get One Matteboard by ID
const getOneMatteboardByID = async (req, res) => {
    const matteboardID = req.params.id

    try{
        
        //Test if ID is Valid before looking for matteboard
        if(!mongoose.Types.ObjectId.isValid(matteboardID)){
            return res.status(404).json({err: "This matteboard ID is Invalid"})
        }
        
        //Find the matteboard by ID
        const matteboard = await Matteboard.findOne({ _id: matteboardID});
        
        //Error handling if does not exist, but ID is Valid - issues iwth this as will stil crash
        if(!matteboard){
            res.status(404).json("This item of matteboard does not exist")
        }
        res.status(200).json(matteboard)

    }catch(err) {
        res.status(400).json({err: err.message })
    }

}


//NEW Create New Matteboard 
const createMatteboard = async (req, res) => {
    const newMatteboard = new Matteboard(req.body);

    try {
        await newMatteboard.save();
        res.status(200).json(newMatteboard)
        
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//DELETE Delete Matteboard By ID
const deleteMatteboard = async (req, res) => {
    const matteboardID = req.params.id

    try{
        
        //Test if ID is Valid before looking for matteboard
        if(!mongoose.Types.ObjectId.isValid(matteboardID)){
            return res.status(404).json({err: "This matteboard ID is Invalid"})
        }
        
        const document = await Matteboard.findByIdAndDelete(matteboardID)
        console.log("Matteboard to be deleted: ", document)

        if(!document) { //Error handle if matteboard unfound
            return res.status(404).send("Matteboard Unfound, unable to delete.")
        }
        res.status(204).json(`Matteboard with ID ${req.body.id} deleted`) //this message will not appear, need to have this fixed. But funtion works sucessfully

    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


//UPDATE Update Existing Matteboard
const updateMatteboard = async (req, res) => {
    const updates = req.body
    
    try{ 
        
        //Test if ID is Valid before looking for Matteboard
        if(!mongoose.Types.ObjectId.isValid(req.params.id)){
            return res.status(404).json({err: "This Matteboard ID is Invalid"})
        }

        const document = await Matteboard.findByIdAndUpdate(
            req.params.id,
            updates,
            { new: true, runValidators: true}
        )

        if(!document){
            return res.status(404).json({err: "Matteboard to be updated unfound, cannot be updated."})
        }

        await document.save()
        res.status(200).send(document)
        
    }catch(err) {
        res.status(500).json({err: err.message})
    }
}


module.exports = {
    createMatteboard,
    getAllMatteboard,
    getOneMatteboardByID,
    updateMatteboard,
    deleteMatteboard
}