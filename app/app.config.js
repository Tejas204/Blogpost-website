angular.
  module('myApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/blogs', {
          template: '<blog-card-list></blog-card-list>'
        }).
        when('/blogs/:id', {
          template: '<blog-content></blog-content>'
        }).
        when('/', {
          template: '<blog-card-list></blog-card-list>'
        }).
        otherwise('/blogs');
    }
  ]);