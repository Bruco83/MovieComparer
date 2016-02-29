app.controller('movieController', function($scope, $http) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.comparisonList= [];
    $scope.movieToCompare= [{},{}];
    
    $scope.getList = function(){
        $http({
          method: 'GET',
          url: '/api/get_movie_comparison_list'
        }).then(function successCallback(response) {
            $scope.comparisonList = response.data;
        }, function errorCallback(response) {
            $scope.comparisonList = 'errore!';
        });
    }
    
    $scope.getMovie = function(title, movieNumber){
        $http({
          method: 'GET',
          url: 'http://www.omdbapi.com/',
          params: {t: title}
        }).then(function successCallback(response) {
            if(response.data.Error){
                $scope.movieToCompare[movieNumber] = "Error";
            } else {
                $scope.movieToCompare[movieNumber] = response.data;
            }
            
        }, function errorCallback(response) {
            $scope.movieToCompare[movieNumber] = 'errore!';
        });
    } 
    
    $scope.compareMovie = function(){
        $http({
          method: 'POST',
          url: '/api/compare_movies',
          params: {movie1: $scope.movieToCompare[0], movie2: $scope.movieToCompare[1]}
        }).then(function successCallback(response) {
            $scope.similarity = response.data;
            $scope.saveComparison();
            $scope.getList();
        }, function errorCallback(response) {
            $scope.movieToCompare[movieNumber] = 'errore!';
        });
    }
    
    $scope.saveComparison = function(){
        $http({
          method: 'GET',
          url: '/api/save_comparison',
          params: {movie1: $scope.movieToCompare[0].Title, 
                   movie2: $scope.movieToCompare[1].Title, 
                   comparisonRate: $scope.similarity.rate}
        }).then(function successCallback(response) {
        }, function errorCallback(response) {
           console.log("Error during comparison save");
        });
    }
    
    //load the list as the page is loaded
    $scope.getList();
});