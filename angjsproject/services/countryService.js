var url='https://restcountries.eu/rest/v2/all';
serviceApp.service('countryService', ['$http', function($http){
    var countryList = function() {
        return $http({
            url: url,
            method: 'GET',
            dataType: 'jsonp',
            headers: {
                'Content-Type': 'applicaton/json'
            }
        });
    }

    return {
        countryList: countryList
    }
}]);
