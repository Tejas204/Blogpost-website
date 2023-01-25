'use strict';
angular.
  module('blogCardList')
  .component('blogCardList', {
    templateUrl: 'blog-card-list/blog-card-list.template.html',
    controller: ['$http', function BlogCardListController($http) {
      var self = this;

      $http.get('http://jsonplaceholder.typicode.com/posts/').then(function(response) {
        console.log(response.data);
        self.blogs = response.data;
      })
      // .catch(err => console.log(err));
    }]
  });