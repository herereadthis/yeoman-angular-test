'use strict';

/**
 * @ngdoc overview
 * @name yeomanAngularTestApp
 * @description
 * # yeomanAngularTestApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanAngularTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'humanTimeFilter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/human-time', {
          templateUrl: 'scripts/componentDemo/humantime/human-time-view.html',
          controller: 'HumanTimeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
