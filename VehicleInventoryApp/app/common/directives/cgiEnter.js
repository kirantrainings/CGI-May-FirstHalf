/**
 * Created by Administrator on 5/10/2016.
 */
/**
 * Created by Administrator on 5/10/2016.
 */

(function(){
    'use strict';
    var cgiEnter = function(){
        var directiveObj = {};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){

            element.bind('keypress',function(evt){
                if(evt.keyCode==13) {
                    scope.$eval(attrs['cgiEnter']);
                }
            });
        };
        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiEnter',[cgiEnter])
})();/**
 * Created by Administrator on 5/10/2016.
 */
/**
 * Created by Administrator on 5/10/2016.
 */
