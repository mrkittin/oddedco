angular.module("ctw").controller("ProjectController", function($scope, $resource) {
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
  var url =  '/rest/project/4567';
  var projectResource = $resource(url);
  projectResource.get({}, function (response) {
    $scope.data = response;
  });
});