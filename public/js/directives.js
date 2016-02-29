app.directive('comparisonList', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/comparison_list.html'
    }
});

app.directive('compareModule', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/compare_module.html'
    }
});

app.directive('searchModule', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/search_module.html'
    }
});

app.directive('moviesDisplay', function() {
    return {
        restrict: 'E',
        templateUrl: '/views/templates/movies_display.html'
    }
});