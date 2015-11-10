(function() {
var myLocalApp = angular.module('airTravelApp', ['ngRoute']);




 myLocalApp.config(routerConfig);

  function routerConfig($routeProvider) {
    $routeProvider.
      when('delay', {
        templateUrl: 'views/delay.html',
        controller: 'airportCtrl'
      }).
      when('login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      }).
      otherwise({
        redirectTo: '/delay'
      });
  }


})();