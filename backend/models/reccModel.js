//FIGURE OUT HOW TO USE ARC CODES AS ID 

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reccSchema = new Schema({

    ARCcode: {
        type: Number,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Recc', reccSchema)