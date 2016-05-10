/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    function  homeCtrl($scope,$state) {
       console.log($state);

        $scope.addMe = function(){
            setTimeout(function(){
                $scope.userName="kiran";
                $scope.$apply();
            },5000);
        }
    };


    angular.module('vehicleInventory')
        .controller('homeCtrl',
            ['$scope',
                '$state',
                homeCtrl])
})();