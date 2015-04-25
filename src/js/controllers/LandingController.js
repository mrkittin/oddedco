angular.module("ctw").controller("LandingController", function($scope, $resource) {
	$scope.$root.showHeader = false;
	$scope.$root.showFooter = false;
	$scope.$root.containerType = "container";
	var imagesResource = $resource('/rest/landing-images');
	imagesResource.query({}, function (response) {
		$scope.rndImages = response;
	});
});