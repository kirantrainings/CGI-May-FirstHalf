/**
 * Created by Administrator on 5/10/2016.
 */
/**
 * Created by Administrator on 5/10/2016.
 */

(function(){
    'use strict';
    var cgiClick = function(){
        var directiveObj = {};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){

            element.bind('click',function(){
                scope.$eval(attrs['cgiClick']);
            });
        };
        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiClick',[cgiClick])
})();/**
 * Created by Administrator on 5/10/2016.
 */
