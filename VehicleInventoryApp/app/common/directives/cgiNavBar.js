/**
 * Created by Administrator on 5/10/2016.
 */
//Syantax

(function(){
    'use strict';
    var cgiNavBar = function(){
        var directiveObj = {};
        directiveObj.templateUrl='app/header/header.tpl.html';
        directiveObj.restrict="A";

        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiNavBar',[cgiNavBar])
})();/**
 * Created by Administrator on 5/10/2016.
 */
