angular.module("ctw").controller("ProjectListController", function($scope) {
  $scope.message = 'you are on project list page';
  $scope.$root.showHeader = true;
  $scope.$root.showFooter = true;
});