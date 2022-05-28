const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    name: String,
    lastname: String,
    street: String,
    city: String,
    state: String,
    zip_postal: String,
    location: String,
    email: String

});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;