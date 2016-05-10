/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    var vehicleFactFn=function($http,$q){
        var vehicles;
      return{
          getNewVehicles:function(){
              var dfd = $q.defer();
              console.log(dfd);
              if(vehicles){
                  dfd.resolve(vehicles);
              }
              else {
                  $http.get('app/data/newVehicles.json')
                      .success(function (response) {
                          //dfd.resolve(response);
                          vehicles = response;
                          dfd.resolve(vehicles);
                      })
                      .error(function (resoponse) {
                          dfd.reject("Error occurred");
                      });
              }
              return dfd.promise;
              //return  $http.get('app/data/newVehicles.json');
          },
          //get Old Vehicles
          getOldVehicles:function(){
              return  $http.get('app/data/oldVehicles.json');
          }
      }  
    };
    angular.module('vehicleInventory.vehicles')
        .factory('vehicleFact',['$http','$q',vehicleFactFn])
})();