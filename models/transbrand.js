const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transbrandSchema = new Schema({
    
    idbook: String,
    idbook: String,
    name: String,
    idtrans: String,
    date: String,
    type: String,

});







const transbrand = mongoose.model('transbrand', transbrandSchema);

module.exports = transbrand;