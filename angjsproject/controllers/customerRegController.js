customerRegApp.controller('CustRegController', ['$scope','countryService', function ($scope, countryService) {
    
    $scope.customerRegObj = {
        firstName: "",
        lastName: "",
        dob: "",
        email: "",
        address: "",
        country: "",
        profilePic: ""
    };
    countryService.countryList().then(function(response){
        $scope.countriesList = response.data;
    }, function(err){
        console.error(err);
    });
    $scope.custReg = function(){
        $scope.customerRegObj.profilePic = window.localStorage.getItem('profilepic');
    };
}]);