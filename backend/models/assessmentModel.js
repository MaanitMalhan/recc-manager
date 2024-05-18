const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const assessmentSchema = new Schema({

    ARCcode: {
        type: Number,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('Assessment', assessmentSchema)