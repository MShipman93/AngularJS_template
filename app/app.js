'use strict';

// Application Modules and Routing
angular
  .module('newApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl : 'views/main.html',
        controller  : 'MainCtrl'
      })
      .when('/view1', {
        templateUrl : 'views/view1.html',
        controller  : 'View1Ctrl'
      });
  });