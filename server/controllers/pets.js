const { Pet } = require('../models/Pet');


module.exports.createPet = (req, res) => {
    const { name,type,desc,skill} = req.body;
    Pet.create({
        name,
        type,
        desc,
        skill

    })
        .then(Pet => res.json(Pet))
        .catch( err => res.status(400).json(err))
}


module.exports.getAllPet = (req, res) => {
    Pet.find({})
        .then(Pet => res.json(Pet))
        .catch( err => res.status(400).json(err))
}


module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then(Pet => res.json(Pet))
        .catch( err => res.status(400).json(err))
}

module.exports.deletePet= (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation  => res.json(deleteConfirmation ))
        .catch( err => res.status(400).json(err))
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(Pet => res.json(Pet))
        .catch( err => res.status(400).json(err))
    }

