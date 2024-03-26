const express = require('express')

const {
    createMoulding,
    getAllMoulding,
    getOneMouldingByID,
    updateMoulding,
    deleteMoulding
} = require('../controllers/moulding')

const router = express.Router()

//GET All Moulding 
router.get('/', getAllMoulding)

//GET One Moulding By ID
router.get('/:id', getOneMouldingByID)

//POST New Moulding
router.post('/', createMoulding)

//PATCH Update One Moulding
router.patch('/:id', updateMoulding)

//DELETE One Moulding
router.delete('/:id', deleteMoulding)

module.exports = router