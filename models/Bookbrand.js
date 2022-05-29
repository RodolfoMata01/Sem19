const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const brandSchema = new Schema({
    idbook: String,
    namebook: String,
    autorname: String,
    LastnameAutor: String,
    rating: String,

});







const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;