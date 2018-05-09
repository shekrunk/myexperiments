financeApp.controller('LineCtrl', ['$scope', '$http', function($scope, $http){
	
	$http({
		method:'GET',
		datatype: 'json',
		headers: {
			'Content-Type' : 'application/json'
		},
		url: 'http://localhost:8080/websockets/angcharts/data/data.json'
	}).then(function(response){
		
		$scope.labels = [];
		$scope.data=[[]];
		$scope.series=['Series A'];
		angular.forEach(response.data.dataset_data.data, function(key, value){
            $scope.labels.push(key[0]);
			for (i in key) {
                if((i>0)&&(i<4))  
                	$scope.data[0].push(key[i]);
             }
            console.log($scope.data[0]);
		});
		
		$scope.datasetOverride = [{
			yAxisID : 'y-axis-1'
		}, {
			yAxisID : 'y-axis-2'
		}];
		
		$scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
		$scope.options = {
			scales: {
				yAxes: [{
					id: 'y-axis-1',
					type: 'linear',
					display: true,
					position: 'left'
				},{
					id: 'y-axis-2',
					type: 'linear',
					display: true,
					position: 'right'
				}]
			}
				
		};
	});
	

	
	/*$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	  $scope.series = ['Series A', 'Series B'];
	  $scope.data = [
	    [65, 59, 80, 81, 56, 55, 40],
	    [28, 48, 40, 19, 86, 27, 90]
	  ];
	  $scope.onClick = function (points, evt) {
	    console.log(points, evt);
	  };
	  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	  $scope.options = {
	    scales: {
	      yAxes: [
	        {
	          id: 'y-axis-1',
	          type: 'linear',
	          display: true,
	          position: 'left'
	        },
	        {
	          id: 'y-axis-2',
	          type: 'linear',
	          display: true,
	          position: 'right'
	        }
	      ]
	    }
	  };*/

}]);