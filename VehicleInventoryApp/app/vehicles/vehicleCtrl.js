/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';

    var vehicleCtrl=function($scope,vehicleFact){
        console.log("Starting")
        vehicleFact.getNewVehicles().success(function(response){
              console.log("--Response--")
              console.log(response);
            $scope.vehicleData=response.vehicles;
          }).error(function (response) {
             console.log(response);
          });

        console.log("Ending");
    };
    angular.module('vehicleInventory.vehicles')
        .controller('vehicleCtrl',
            ['$scope',
            'vehicleFact',
            vehicleCtrl])
})();