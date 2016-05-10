/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    function  registerCtrlFn($scope,lookupFact,registerSvc) {
        $scope.registerUser={};
        $scope.genders=lookupFact.getGenderLookup();

        $scope.register=function(){
            registerSvc.registerUser($scope.registerUser);
        }
    }


    angular.module('vehicleInventory.register')
        .controller('registerCtrl',
            ['$scope',
                'lookupFact',
                'registerSvc',
                registerCtrlFn])
})();