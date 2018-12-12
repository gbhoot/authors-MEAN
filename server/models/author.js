var mongoose = require('../config/mongoose.js'),
    validators = require('mongoose-validators');

var AuthorSchema = new mongoose.Schema({
    fName: {type: String, required: true, validate: [validators.isLength(3)]},
    lName: {type: String, required: true, validate: [validators.isLength(3)]}
}, {timestamps: true});

var Authors = mongoose.model('Author', AuthorSchema);

module.exports = Authors;