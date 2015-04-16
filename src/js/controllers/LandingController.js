angular.module("ctw").controller("LandingController", function($scope, $resource) {
	$scope.$root.showHeader = false;
	$scope.$root.showFooter = false;
	var imagesResource = $resource('/rest/landing-images');
	imagesResource.query({}, function (response) {
		$scope.rndImages = response;
	});
});