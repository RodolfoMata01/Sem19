const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transbrandSchema = new Schema({
    
    idbrand: String,
    idbook: String,
    date: String,
    type: String,

});







const transbrand = mongoose.model('transbrand', transbrandSchema);

module.exports = transbrand;