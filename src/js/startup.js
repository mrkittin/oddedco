angular.module("ctw", ['ngRoute']).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/templates/landing.html',
        controller: 'LandingController'
      }).
      when('/project/:projectId', {
        templateUrl: '/templates/project.html',
        controller: 'ProjectController'
      }).
      when('/projects', {
        templateUrl: '/templates/projectList.html',
        controller: 'ProjectListController'
      }).
      otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
      rewriteLinks: true
    });
  }]);