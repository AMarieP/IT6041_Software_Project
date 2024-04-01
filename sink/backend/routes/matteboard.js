const express = require('express')
const {
    createMatteboard,
    getAllMatteboard,
    getOneMatteboardByID,
    updateMatteboard,
    deleteMatteboard
} = require('../controllers/matteboard')

const router = express.Router()

//GET All Matteboard 
router.get('/', getAllMatteboard)

//GET One Matteboard By ID
router.get('/:id', getOneMatteboardByID)

//POST New Matteboard
router.post('/', createMatteboard)

//PATCH Update One Matteboard
router.patch('/:id', updateMatteboard)

//DELETE One Matteboard
router.delete('/:id', deleteMatteboard)

module.exports = router