angular.module("ctw").controller("AboutController", function($scope) {
  $scope.message = 'you are on about page';
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
});