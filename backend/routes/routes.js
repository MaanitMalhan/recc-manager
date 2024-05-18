const express = require('express');
const { createRecc, getRecc, getReccs, deleteRecc, updateRecc} = require('../controllers/reccController');

const router = express.Router();
//=========================================================
    //routes
    //GET -> get all files
    //POST -> upload a file
    //DELETE/:id -> delete a file
    //GET/:id -> get a file
    //PATCH/:id -> update a file
//=========================================================

//GET -> get all files
router.get('/', getReccs)

//GET:id -> get a file
router.get('/:id', getRecc)

// POST -> upload a file
router.post('/', createRecc)

//DELETE/:id -> delete a file
router.delete('/:id', deleteRecc)

//PATCH/:id -> update a file
router.patch('/:id', updateRecc)


module.exports = router