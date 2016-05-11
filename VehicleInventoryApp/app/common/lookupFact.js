/**
 * Created by Administrator on 5/9/2016.
 */
(function () {
    'use strict';
    var lookupFactFn = function ($http, $q) {
        return {
            getGenderLookup: function () {
                var genders = [{value: "M", name: "Male"},
                    {value: "F", name: "Female"},
                    {value: "N", name: "None"}];
                return genders;
            },
            getNavigationTabs: function () {
                return [
                    {
                        display: "Home",
                        templateUrl: "app/home/home.html"
                    },
                    {
                        display: "Register",
                        templateUrl: 'app/register/register.tpl.html'
                    },
                    {
                        display: "Login",
                        templateUrl: 'app/login/login.tpl.html'
                    },
                    {
                        display: "New Vehicles",
                         templateUrl: 'app/vehicles/newVehicle.tpl.html'
                    },
                    {
                        display: "Old Vehicles"
                        , templateUrl: 'app/vehicles/oldVehicle.tpl.html'
                    }
                ];
            },
            getNavigationTabsFromApi: function () {
                var dfd = $q.defer();
                $http.get("app/data/navigation.json")
                    .then(function (response) {
                        dfd.resolve(response.data)
                    })
                    .catch(function (response) {
                        dfd.reject("Error occurred");
                    });
                return dfd.promise;
                // return $http.get("app/data/navigation.json")
            },
            getCountries:function(){
                return[{code:"IN",name:"India",continent:'Asia'},
                    {code:"US",name:"United States",continent:'American'},
                    {code:"CA",name:"Canada",continent:"American"},
                    {code:"UK",name:"United Kingdom",continent:"Europe"},
                    {code:"SA",name:"South Africa",continent:"African"}]
            }
        };
    };
    angular.module('vehicleInventory')
        .factory('lookupFact',
            ["$http", '$q', lookupFactFn]);

})();