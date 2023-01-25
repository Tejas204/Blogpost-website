'use strict';
angular.
  module('blogContent')
  .component('blogContent', {
    templateUrl: 'blog-content/blog-content.template.html',
    controller: ['$routeParams','$http', function BlogContentController($routeParams,$http) {
      var self = this;
        self.blogId = $routeParams.id;
      $http.get(`http://jsonplaceholder.typicode.com/posts/${self.blogId}`).then(function(response) {
        console.log(response.data);
        // self.blogs = response.data;
        self.blog = response.data;
        $http.get(`http://jsonplaceholder.typicode.com/users/${self.blog.userId}`)
        .then((resp) => {
          self.authorInfo = resp.data;
        })
        
      })
      .catch(err => console.log(err));
      // self.postId = this.blogId
      console.log("post id ", self.blogId)
      $http.get(`http://jsonplaceholder.typicode.com/comments?postId=${self.blogId}`)
      .then((response)=>{
        console.log("comment data", response.data);
        self.comments = response.data;
      })
    }]
  });