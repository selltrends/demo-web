jQuery(document).ready(function(){
  $("h1,h3,p").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "transparent");
  });
  $('.carousel').carousel({
  interval: 5000
})
});

var contentApp = angular.module('contentApp',[]);

contentApp.controller('ContentListCtrl',function($scope, $http){
  $http.get('data/content.json').success(function(data){
    $scope.contents = data;
  })
});

contentApp.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});
