angular.module("ctw").controller("MainCtrl", function($scope, $location, $resource) {
	var imagesResource = $resource('/rest/landing-images');
  imagesResource.query({}, function (response) {
    $scope.rndImages = response;
  });
});