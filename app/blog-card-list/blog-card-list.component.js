'use strict';
angular.
  module('blogCardList')
  .component('blogCardList', {
    templateUrl: 'blog-card-list/blog-card-list.template.html',
    controller: ['$http', '$scope', function BlogCardListController($http, $scope) {
      var self = this;


      $http.get('http://jsonplaceholder.typicode.com/posts/').then(function(response) {
        console.log(response.data);
        self.blogs = response.data;

        $scope.currentPage = 0;
        $scope.pageSize = 10;
        $scope.numberOfPages = () => {
        return Math.ceil(self.blogs.length / $scope.pageSize);
      }
      })

      // .catch(err => console.log(err));
    }]
  });

  angular.
  module('blogCardList').
  filter('startFrom', () => {
    return (input, start) => {
      start = +start; //parse to int
      return input.slice(start);
    }
  });