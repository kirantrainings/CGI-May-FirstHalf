/**
 * Created by Administrator on 5/9/2016.
 */
(function(){
    'use strict';
    var lookupFactFn= function(){
        return {
            getGenderLookup:function(){
                var genders =[{value:"M",name:"Male"},
                    {value:"F",name:"Female"},
                    {value:"N",name:"None"}];
                return genders;
            },
            getNavigationTabs:function(){
                return[
                    {display:"Home",
                     templateUrl:"app/home/home.tpl.html"
                    },
                    {display:"Register",
                     templateUrl:'app/register/register.tpl.html'},
                    {display:"Login"
                     ,templateUrl:'app/login/login.tpl.html'}
                    ];
            }
        };
    };
    angular.module('vehicleInventory')
        .factory('lookupFact',
            [lookupFactFn]);

})();