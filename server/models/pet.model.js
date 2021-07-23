const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minlength: [
            3,
            "Name requires a minimum of 3 characters"
        ]
    },

    type: {
        type: String,
        required: [
            true,
            "Type is required"
        ],
        minlength: [
            3,
            "Type requires a minimum of 3 characters"
        ]
    },

    description: {
        type: String,
        required: [
            true,
            "Description is required"
        ],
        minlength: [
            3,
            "Description requires a minimum of 3 characters"
        ]
    },

    skillOne: {
        type: String
    },

    skillTwo: {
        type: String
    },

    skillThree: {
        type: String
    },

    normalized: {
        type: String
    }

}, { timestamps: true });

PetSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports.Pet = mongoose.model('Pet', PetSchema);