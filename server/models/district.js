const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema({

    districtname: String,


});

module.exports = mongoose.model('District', districtSchema);