/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    var vehicleFactFn=function($http){
      return{
          getNewVehicles:function(){
              return  $http.get('app/data/newVehicles.json');
          }
      }  
    };
    angular.module('vehicleInventory.vehicles')
        .factory('vehicleFact',['$http',vehicleFactFn])
})();