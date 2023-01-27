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
        self.blog = response.data;

        $http.get(`http://jsonplaceholder.typicode.com/users/${self.blog.userId}`)
        .then((resp) => {
          self.authorInfo = resp.data;
        })

        $http.get(`https://jsonplaceholder.typicode.com/photos/${self.blogId}`).then(function(response){
          console.log("Image"+response.data)
          self.image = response.data;
          console.log(self.image.url);
        })
        
      })
      .catch(err => console.log(err));
  

      console.log("post id ", self.blogId)
      $http.get(`http://jsonplaceholder.typicode.com/comments?postId=${self.blogId}`)
      .then((response)=>{
        console.log("comment data", response.data);
        self.comments = response.data;
      })
    }]
  });