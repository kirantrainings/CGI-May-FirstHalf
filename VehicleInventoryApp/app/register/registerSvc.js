/**
 * Created by Administrator on 5/10/2016.
 */
(
    function(){
    'use strict';

        var registerSvc=function($q,$http){
            this.registerUser=function(data){
                console.log(data);
            };
            this.checkUser = function(username){
                var dfd= $q.defer();
                var isUserExisting=false;
                $http.get('app/data/users.json')
                    .success(function(response){
                      angular.forEach(response.users,function(item){
                          if(item.username==username){
                           isUserExisting=true;  
                          }
                      }) ;
                        dfd.resolve(!isUserExisting);
                    })
                    .error(function(response){
                        
                    });
                    
                return dfd.promise;
            };

        };
        //service syntax

        angular.module('vehicleInventory.register')
            .service('registerSvc',['$q','$http',registerSvc])

    }
)();