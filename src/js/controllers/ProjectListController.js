angular.module("ctw").controller("ProjectListController", function($scope, $resource) {
  $scope.$root.showHeader = false;
  $scope.$root.showFooter = true;
  $scope.$root.containerType = "container-fluid";
  $scope.$root.title = "ODDED - PROJECTS";
  // var projectResource = $resource('/rest/projects');
  // projectResource.get({}, function (response) {
  //   $scope.data = response;
  // });
  // var categoriesResource = $resource('/rest/categories');
  // categoriesResource.get({}, function (response) {
  //   $scope.categories = response;
  // });
});