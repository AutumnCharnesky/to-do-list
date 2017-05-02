var app=angular.module('ourModule', []);
app.controller('ourController', function($scope) {

  $scope.toDoList=[];

  $scope.addItem=function(newItem) {
    console.log(newItem);
    $scope.toDoList.push({name: newItem.name});
    console.log($scope.toDoList)

  }

 $scope.removeItem=function(index) {
 $scope.toDoList.splice(index, 1);
 };

});
