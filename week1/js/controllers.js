var phonecatApp = angular.module('angularApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $rootScope) {
  $scope.phones = [

    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];

  $scope.titulo = "LOV CHEROPE";

  $scope.lista = [0, 1, 2, 3, 4, 5, 6, 7];

  $scope.query = [0, 1, 2, 3, 4, 5, 6, 7];

  $rootScope.myheading = "Felicia";
});


  

 