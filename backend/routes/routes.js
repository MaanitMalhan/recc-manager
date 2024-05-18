const express = require('express');
const Assessment = require('../models/assessmentModel');

const router = express.Router();
//=========================================================
    //routes
    //GET -> get all files
    //POST -> upload a file
    //DELETE/:id -> delete a file
    //GET/:id -> get a file
//=========================================================

//GET -> get all files
router.get('/', (req, res) => {
    res.json({message: "get all files"});
})

//GET:id -> get a file
router.get('/:id', (req, res) => {
    res.json({message: "get file with id: " + req.params.id});
})

// POST -> upload a file
router.post('/', async (req, res) => {
    const {ARCcode, description} = req.body
    
    try {
      const assessment = await Assessment.create({ARCcode, description})
      res.status(200).json(assessment)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  })

//DELETE/:id -> delete a file
router.delete('/:id', (req, res) => {
    res.json({message: "delete file with id: " + req.params.id});
})

module.exports = router