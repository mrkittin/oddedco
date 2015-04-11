angular.module("ctw", ['ngRoute', 'ngResource']).config(['$routeProvider', '$locationProvider',
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
      when('/about', {
        templateUrl: '/templates/about.html',
        controller: 'AboutController'
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