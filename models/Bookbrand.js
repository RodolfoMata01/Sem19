const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookbrandSchema = new Schema({
    idbook: String,
    namebook: String,
    autorname: String,
    LastnameAutor: String,
    rating: String,

});







const Bookbrand = mongoose.model('Bookbrand', BookbrandSchema);

module.exports = Bookbrand;