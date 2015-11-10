
var airTravelApp = angular.module ('airTravelApp', []);

airTravelApp.controller('AirportDelayCtrl', airportDelaysCtrlDef);

	function airportDelaysCtrlDef ($scope, $http) {

	$scope.selectedCity = 'MIA';
	$scope.cities = [{name: ' Miami', value: 'MIA'),(name: ' San Francisco', value: 'SFO'),(name: 'John F. Kennedy NY', value: 'JFK'}];

	

	var aiportDataUrlFormat = "https://publicdata-airports.firebaseio.com/_AIRPORTCODE_.json";
	var selectedCityuRL = buildAirportDelayUrl($scope.selectedCity);

	

		function buildAirportDelayUrl(city) {
			return airportDataUrlFormat.replace('_AIRPORTCODE_',city);

		}

		function loadData(airportURL) {
			$http.get(airportURL).success(onDelayDataLoadedSucces);

		}


		function onDelayDataLoadedSucces (delayCityAirportData) {
			$scope.cityDelayInfo = delayCityAirportData;
		};

		loadData(selectCityuRL);

		// listen to the change event so I can change city

		$scope.handleCitySelectionChange = function() {
			var cityUrl = buildAirportDelayUrl($scope.selectedCity);
				loadData(cityUrl);

		}
	}	