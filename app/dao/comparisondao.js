var Comparison    = require('../models/comparison.js');

module.exports = {
    
    saveComparison: function(req, res){
        var comparison = new Comparison();
        comparison.movie1 = req.query.movie1;
        comparison.movie2 = req.query.movie2;
        comparison.comparisonRate = req.query.comparisonRate;
        comparison.insertionDate = new Date().toJSON();
        
        comparison.save(function(err) {
             console.log(new Date().toLocaleString() + ' - Inserting comparison...' );
            if (err){
                console.log(new Date().toLocaleString() + ' - Error - ' + err );
                res.send(err);
            }
            res.json(comparison);
             console.log(new Date().toLocaleString() + ' - Comparison inserted' );
        });
    },
    
    
    getComparisonList: function(req, res){
        var resultSize = 5;
        if(req.query.resSize){
            resultSize = req.query.resSize;    
        }
        console.log('Retriving comparison list...' );
        var query = Comparison.find().sort('-insertionDate').limit(resultSize);
        query.exec(function(err, comparisons) {
                if (err)
                    res.send(err);
                res.json(comparisons);
            });
        console.log('Comparison list retrived' );
    }
};