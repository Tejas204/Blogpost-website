'use strict';
angular.
  module('blogCardList').
  component('blogCardList', {
    templateUrl: 'blog-card-list/blog-card-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      var self = this;

      $http.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        console.log(response.data);
        self.blogs = response.data;
      })
      .catch(err => console.log(err));
    }]
  });