const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transbrandSchema = new Schema({
    name: String,
    _id: String,
    date: String,
    type: String,

});







const transbrand = mongoose.model('transbrand', transbrandSchema);

module.exports = transbrand;