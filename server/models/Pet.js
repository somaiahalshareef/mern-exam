const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength: [3, "Name Must be at least three characters"]
    },
    type: { 
        type: String,
        minlength: [3, "type Must be at least three characters"]
    },
    desc: { 
        type: String,
        minlength: [3, "Description Must be at least three characters"]
    },
    skill: { 
        type: String,
        minlength: [3, "skill Must be at least three characters"]
    },
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);