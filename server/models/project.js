const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({

    projectname: String,
    bikenumber : Number,
    distributedyear: Number,
    districtid: String,
   

});
 
module.exports = mongoose.model('Project', projectSchema);