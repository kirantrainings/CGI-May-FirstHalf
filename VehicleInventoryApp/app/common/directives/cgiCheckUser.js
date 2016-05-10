
(function(){
    'use strict';
    var cgiCheckUser = function(registerSvc){
        var directiveObj = {};
        directiveObj.restrict="A";
        directiveObj.require="ngModel";
        directiveObj.link=function (scope,element,attrs,ctl) {
            ctl.$parsers.unshift(validate);
            ctl.$formatters.unshift(validate);
            function validate(viewVal){
                registerSvc.checkUser(viewVal).then(function(response){
                    ctl.$setValidity('cgiCheckUser',response);
                });
                return viewVal;
            }
        };

        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiCheckUser',['registerSvc',cgiCheckUser])
})();/**
 * Created by Administrator on 5/10/2016.
 */
