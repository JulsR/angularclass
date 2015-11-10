var myApp = angular.module("myApp", []);


myApp.controller('MyPhoneListCtrl', theFunction);
function theFunction($scope) { 
  $scope.title = 'List of Phones'; 	
  $scope.phones = [

    {'name': '786000000',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
};

  myApp.controller('MyNamesListCtrl', ['$scope', function($scope) { 
  $scope.titulo = 'List of Names'; 
  $scope.name = [

    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
}]);
