angular.module("ctw").controller("ProjectListController", function($scope, $resource) {
  $scope.message = 'you are on project list page';
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
  var projectResource = $resource('/rest/projects');
  projectResource.get({}, function (response) {
    $scope.data = response;
  });
});