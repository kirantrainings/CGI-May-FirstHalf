/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    function  registerCtrlFn($scope,lookupFact,registerSvc,$state) {
        $scope.registerUser={};
        $scope.genders=lookupFact.getGenderLookup();

        $scope.register=function(){
            registerSvc.registerUser($scope.registerUser);
           // $state.go('home',{userDataerx:$scope.registerUser});
        };
        
        
        
        
        $scope.$watch('fullName',function(newVal,oldVal){
           console.log("---OldValue---");
            console.log(oldVal);

            console.log("--New Value---");
            console.log(newVal);
        });
    }


    angular.module('vehicleInventory.register')
        .controller('registerCtrl',
            ['$scope',
                'lookupFact',
                'registerSvc',
                '$state',
                registerCtrlFn])
})();