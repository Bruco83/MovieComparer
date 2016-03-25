//comparer.js

module.exports = {
    compare : function(req, res){
        var movie1 = JSON.parse(req.query.movie1);
        var movie2 = JSON.parse(req.query.movie2);
        var rate = 99;
        
        rate-=getYearDifferenceRate(movie1["Year"],movie2["Year"]);
        rate-=getDirectorDfferenceRate(movie1["Director"],movie2["Director"]);
        rate-=getGenreDifferenceRate(movie1["Genre"],movie2["Genre"]);
        rate-=getActorDifferenceRate(movie1["Actors"],movie2["Actors"]);
        
        if(rate >= 99 && movie1["Title"] == movie2["Title"]){
            console.log("Same movie!");
            rate = 100;
        }
                
        res.json({'rate': rate});
    }
}


function getYearDifferenceRate(y1, y2){
    var diff = Math.round(Math.abs(y1-y2)/10)*6;
    if(diff>18){
        diff = 18;
    }
    console.log("Filmed " + Math.round(Math.abs(y1-y2)) +  " years away");
    return diff;
};

function getDirectorDfferenceRate(d1, d2){
    if(d1==d2){
        return 0;
    }
    console.log("Same director");
    return 9;
};

function getGenreDifferenceRate(g1, g2){
    var length1 = g1.split(',').length;
    var length2 = g2.split(',').length;
    var maxNumGnr = 3;
    var maxDiff = 42;
    if(length1 < maxNumGnr){
        maxNumGnr = length1;
    }
    if(length2 < maxNumGnr){
        maxNumGnr = length2;
    } 
    var intersectionLength = getIntersectionLength(g1, g2);
    var res = (maxNumGnr - intersectionLength) * maxDiff / maxNumGnr;
    console.log(intersectionLength + " common Genres");
    return res;
};

function getActorDifferenceRate(a1, a2){
    var intersectionLength = getIntersectionLength(a1, a2);
    var res = (3-intersectionLength)*10;
    console.log(intersectionLength + " common Actors");
    return res;
}

function getIntersectionLength(string1, string2){
    var array1 = string1.split(',');
    var array2 = string2.split(',');
    
    var intersection=[];
    j=0;
    for (var i=0; i < array1.length; ++i){
        if (array2.indexOf(array1[i].trim()) != -1){
            intersection[j++] = array1[i];
        }
    }
    
    return intersection.length;
};

