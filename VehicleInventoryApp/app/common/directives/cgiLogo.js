/**
 * Created by Administrator on 5/10/2016.
 */
//Syantax

(function(){
    'use strict';
    var cgiLogo = function(){
      var directiveObj = {};
        directiveObj.template="CGI";

        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiLogo',[cgiLogo])
})();