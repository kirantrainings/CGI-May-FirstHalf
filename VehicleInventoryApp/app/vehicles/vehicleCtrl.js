/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';

    var vehicleCtrl;
    vehicleCtrl = function ($scope, vehicleFact) {
        console.log("Starting")
        vehicleFact.getNewVehicles()
            .success(function (response) {
                console.log("--Response--")
                console.log(response);
                $scope.vehicleData = response.vehicles;
            }).error(function (response) {
            console.log(response);
        });

        vehicleFact.getOldVehicles().success(function (response) {
            $scope.oldVehicleData = response.vehicles;
        }).error(function (response) {

        });


        console.log("Ending");
    };
    angular.module('vehicleInventory.vehicles')
        .controller('vehicleCtrl',
            ['$scope',
            'vehicleFact',
            vehicleCtrl])
})();