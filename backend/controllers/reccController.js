const Recc = require('../models/reccModel');
const mongoose = require('mongoose');

//get all recs
const getReccs = async (req, res) => {
    const reccs = await Recc.find({}).sort({createdAt: -1})

    res.status(200).json(reccs)
};

// //get a single rec 
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
    const { ARCcode, location, description, template, reportName } = req.body
    
    let emptyFields = []

    if(!ARCcode) {
        emptyFields.push('ARCcode')
    }
    if(!location) {
        emptyFields.push('location')
    }
    if(!description) {
        emptyFields.push('description')
    }
    if(!template) {
        emptyFields.push('template')
    }
    if(!reportName) {
        emptyFields.push('Report Name')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: `Please fill in the following fields: ${emptyFields.join(', ')}`, emptyFields})
    }

    // add document to DB
    try {
      const recc = await Recc.create({ARCcode, location, description, template, reportName})
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
    const { id } = req.params;
    const { ARCcode, location, description, template, reportName } = req.body;
    
    let emptyFields = [];

    if (!ARCcode) {
        emptyFields.push('ARCcode');
    }
    if (!location) {
        emptyFields.push('location');
    }
    if (!description) {
        emptyFields.push('description');
    }
    if (!template) {
        emptyFields.push('template');
    }
    if (!reportName) {
        emptyFields.push('reportName');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: `Please fill in the following fields: ${emptyFields.join(', ')}`, emptyFields });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: `Not a valid database id: ${id}` });
    }

    try {
        const recc = await Recc.findOneAndUpdate(
            { _id: id },
            { $set: { ARCcode, location, description, template, reportName } },
            { new: true, runValidators: true }
        );

        if (!recc) {
            return res.status(404).json({ error: `No recc in database with id: ${id}` });
        }

        res.status(200).json({ message: `Recc with id: ${id} updated`, recc });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

    

    
module.exports = {
    createRecc,
    getReccs,
    getRecc,
    deleteRecc,
    updateRecc
}