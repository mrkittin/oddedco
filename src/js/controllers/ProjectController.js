angular.module("ctw").controller("ProjectController", function($scope, $resource) {
  $scope.$root.showHeader = false;
  $scope.$root.showFooter = true;
  $scope.$root.containerType = "container-fluid";
  var url =  '/rest/project/4567';
  var projectResource = $resource(url);
  projectResource.get({}, function (response) {
    $scope.data = response;
  });
});