jQuery(document).ready(function(){
  $("h1,h3,p").hover(function(){
    $(this).css("background-color", "pink");
    }, function(){
    $(this).css("background-color", "transparent");
});
});

var contentApp = angular.module('contentApp',[]);

contentApp.controller('ContentListCtrl',function($scope, $http){
  $http.get('data/content.json').success(function(data){
    $scope.contents = data;
  })
})
