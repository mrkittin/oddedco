angular.module("ctw").controller("ProjectListController", function($scope, $resource) {
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
  $scope.$root.containerType = "container-fluid";
  var projectResource = $resource('/rest/projects');
  projectResource.get({}, function (response) {
    $scope.data = response;
  });
  var categoriesResource = $resource('/rest/categories');
  categoriesResource.get({}, function (response) {
    $scope.categories = response;
  });
});