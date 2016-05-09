/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    function  registerCtrlFn($scope,lookupFact) {
        $scope.registerUser={};
        $scope.genders=lookupFact.getGenderLookup();

        $scope.register=function(){
            console.log( $scope.registerUser);
        }
    }


    angular.module('vehicleInventory.register')
        .controller('registerCtrl',
            ['$scope',
                'lookupFact',registerCtrlFn])
})();