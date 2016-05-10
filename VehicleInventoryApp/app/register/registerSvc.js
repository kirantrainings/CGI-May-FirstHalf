/**
 * Created by Administrator on 5/10/2016.
 */
(
    function(){
    'use strict';

        var registerSvc=function(){
            this.registerUser=function(data){
                console.log(data);
            }

        };
        //service syntax

        angular.module('vehicleInventory.register')
            .service('registerSvc',[registerSvc])

    }
)();