angular.module("ctw").controller("ProjectListLandingController", function($scope, $resource) {
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
  $scope.$root.showCategories = false;
  $scope.$root.showTopProjects = false;
  $scope.$root.containerType = "container-fluid";
  // var projectResource = $resource('/rest/top-projects');
  // projectResource.get({}, function (response) {
  //   $scope.data = response;
  // });
  // var categoriesResource = $resource('/rest/categories');
  // categoriesResource.get({}, function (response) {
  //   $scope.categories = response;
  // });
});