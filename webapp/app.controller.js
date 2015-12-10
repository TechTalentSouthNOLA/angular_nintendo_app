angular.module('myApp')
  .controller('asyncCtrl', function($scope, $http, ApiUrl) {
    // controller functions go here
    console.log('Controller Start');
    $http.get(ApiUrl)
      .success(function(data) {
        console.log(data);
        $scope.products = data;
      })
      .error(function(err) {
        console.log(err);
    });
    console.log('Controller End');
  });