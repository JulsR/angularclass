// JavaScript Document
"use strict";

var placesApp = angular.module('placesApp', []);

placesApp.controller('PlacesCtrl', function ($scope, $http) {
  $http.get('js/places.json').success(function(data) {
  $scope.countries = data;
 });

$scope.orderProp = 'country'; 

});