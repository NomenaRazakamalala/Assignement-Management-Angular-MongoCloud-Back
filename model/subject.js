let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let SubjectSchema = Schema({
    id: Number,
    name: String,
    picture: String,
    teacher_id: Number,
});

SubjectSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('subjects', SubjectSchema);
