/**
 * Created by Administrator on 5/10/2016.
 */

(function(){
    'use strict';
    var cgiNumberOnly = function(){
        var directiveObj = {};
        //directiveObj.templateUrl='app/header/header.tpl.html';
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){
            console.log(scope);
            console.log(element);
            console.log(attrs);
            element.bind('keypress',function(evt){
               console.log(evt.keyCode);
                if(evt.keyCode>=48 && evt.keyCode<=57){
                }
                else{
                    evt.preventDefault();
                }
            });
        };
        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiNumberOnly',[cgiNumberOnly])
})();/**
 * Created by Administrator on 5/10/2016.
 */
