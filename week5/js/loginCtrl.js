(function(){

  var airTravelApp = angular.module('airTravelApp');

  airTravelApp.controller('LoginCtrl', LoginCtrlDef);

  function LoginCtrlDef ($scope) {
   $scope.title = 'Login Page';
   }
})()