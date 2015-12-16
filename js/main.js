jQuery(document).ready(function(){
  $("p").click(function(){
  $(this).css("background-color","yellow");
  });
});

var contentApp = angular.module('contentApp',[]);

contentApp.controller('ContentListCtrl',function($scope, $http){
  $http.get('data/content.json').success(function(data){
    $scope.contents = data;
  })
})
