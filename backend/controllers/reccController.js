const Recc = require('../models/reccModel');
const mongoose = require('mongoose');

//get all recs
const getReccs = async (req, res) => {
    const reccs = await Recc.find({}).sort({createdAt: -1})

    res.status(200).json(reccs)
};

//get a single rec - HAS ERROR
const getRecc = async (req, res) => {
    //grab id from params
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `not a valid database id: ${id}`})
    }

    const recc = await Recc.findById(id)
    if (!recc) {
       return res.status(404).json({error: `No recc in database with id: ${id}`})
    }
    //if recc is found
    res.status(200).json(recc)
    
};

//create a rec
const createRecc = async (req, res) => {
    const {ARCcode, description} = req.body
    // add document to DB
    try {
      const recc = await Recc.create({ARCcode, description})
      res.status(200).json(recc)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
};

//delete a rec
const deleteRecc = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `not a valid database id: ${id}`})
    }

    const recc = await Recc.findOneAndDelete({_id: id})

    if (!recc) { 
        return res.status(404).json({error: `No recc in database with id: ${id}`})
    }

    res.status(200).json({message: `Recc with id: ${id} deleted`})
};


//update a rec
const updateRecc = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: `not a valid database id: ${id}`})
    }

    const recc = await Recc.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!recc) {
        return res.status(404).json({error: `No recc in database with id: ${id}`})
    }

    res.status(200).json({message: `Recc with id: ${id} updated`})

}

module.exports = {
    createRecc,
    getReccs,
    getRecc,
    deleteRecc,
    updateRecc
}