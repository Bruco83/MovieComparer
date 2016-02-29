var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ComparisonSchema   = new Schema({
    movie1: String,
    movie2: String,
    comparisonRate: Number,
    insertionDate: String
});

module.exports = mongoose.model('Comparison', ComparisonSchema);