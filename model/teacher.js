let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let TeacherSchema = Schema({
    id: Number,
    name: String,
    email: String,
    picture: String,
});

TeacherSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('teachers', TeacherSchema);
