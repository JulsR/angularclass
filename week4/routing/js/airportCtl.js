(function() {



var airTravelApp = angular.module('airTravelApp', []);

airTravelApp.controller('AirportDelayCtrl', aiportDelaysCtrlDef);

function aiportDelaysCtrlDef ($scope, $http) {

//Object.keys(cities).forEach(function(key) {var cityObj = {}; cityObj[key] = cities[key]; cityArr.push(cityObj)  }

   $scope.selectedCity = 'SFO';
   $scope.cities = [{name: 'Miami', value: 'MIA'}, 
   {name: 'San Franz', value: 'SFO'}, 
   {name: 'New York', value: 'JFK'},{name: 'Atlanta', value: 'ATL'}, {name: 'Chicago', value: 'ORD'} ];

   var airportDataUrlFormat = "https://publicdata-airports.firebaseio.com/_AIRPORTCODE_.json";
   var selectCityUrl = buildAirportDelayUrl($scope.selectedCity);
   
   function buildAirportDelayUrl(city) {
    return airportDataUrlFormat.replace('_AIRPORTCODE_',city);
   }

   function loadData(airportUrl) {
    $http.get(airportUrl).success(onDelayDataLoadedSucces);
   }
   
   function onDelayDataLoadedSucces (delayCityAirportData) {
     $scope.cityDelayInfo = delayCityAirportData;
    };

    loadData(selectCityUrl); 

    //listen to the change event so I can change city
    $scope.handleCitySelectionChange = function() {
        var cityUrl = buildAirportDelayUrl($scope.selectedCity); 
        loadData(cityUrl);
    }

 
}
})()
