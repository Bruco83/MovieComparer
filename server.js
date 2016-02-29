// server.js

//Setup
var express    = require('express');       
var app        = express();                 
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MovieCompare');

mongoose.connection.on('error', function (err) {
    console.log('Connection to MongoDB failed!' + err);
});

var Comparison    = require('./app/models/comparison.js');

var port = process.env.PORT || 3000;

var comparisonDao = require('./app/dao/comparisondao.js');
var comparer = require('./app/utils/comparer.js');
//Rest APIs
app.get('/api/save_comparison', comparisonDao.saveComparison); //Save 1 comparison result given parameters: movie1, movie2 and comparison rate
app.get('/api/get_movie_comparison_list', comparisonDao.getComparisonList); //Get the 5 latest comparison result or an amout requested with param resSize
app.post('/api/compare_movies', comparer.compare); //Get the comparison rate between two movies passed as json
// =============================================================================
app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
});
app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('MovieComparer up and running!' + port);