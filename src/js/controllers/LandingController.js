angular.module("ctw").controller("LandingController", function($scope) {
  $scope.message = 'you are on landing page';
  $scope.$root.showHeader = false;
  $scope.$root.showFooter = false;
});