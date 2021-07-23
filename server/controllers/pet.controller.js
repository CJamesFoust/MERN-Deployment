const { Pet } = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = req.body;
    const normalized = type.toLowerCase();

    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree,
        normalized
    })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
};

module.exports.getAllPets = (req, res) => {
    Pet.find({}).sort({ normalized: 'asc' })
        .then(pets => res.json(pets))
        .catch(err => res.status(400).json(err));
};

module.exports.getPet = (req, res) => {
    Pet.find({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.status(400).json(err));
};

module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
};

module.exports.deletePet = (req, res) => {
    Pet.findOneAndDelete({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err));
};