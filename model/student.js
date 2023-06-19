let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");

let StudentSchema = Schema({
    id: Number,
    name: String,
    email: String,
    picture: String,
});

StudentSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('students', StudentSchema);
