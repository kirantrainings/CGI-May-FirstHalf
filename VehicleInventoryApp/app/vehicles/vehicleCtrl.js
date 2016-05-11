/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';

    var vehicleCtrl;
    vehicleCtrl = function ($scope, vehicleFact,$rootScope) {
        console.log("Starting")
        vehicleFact.getNewVehicles()
            .then(function (response) {
                console.log("--Response--")
                console.log(response);
                $scope.vehicleData = response.vehicles;
            }).catch(function (response) {
            console.log(response);
        });

        vehicleFact.getOldVehicles().success(function (response) {
            $scope.oldVehicleData = response.vehicles;
        }).error(function (response) {

        });

        $scope.vehicleCheck= function(item){
            if(item.isSelected){
                $rootScope.$broadcast('VEHICLE_SELECTED_FOR_CHECKOUT',{data:item})
            }
            else{
                $rootScope.$broadcast('VEHICLE_REMOVED_FROM_CHECKOUT',{data:item});
            }
        }


        console.log("Ending");
    };
    angular.module('vehicleInventory.vehicles')
        .controller('vehicleCtrl',
            ['$scope',
            'vehicleFact',
                '$rootScope',
            vehicleCtrl])
})();