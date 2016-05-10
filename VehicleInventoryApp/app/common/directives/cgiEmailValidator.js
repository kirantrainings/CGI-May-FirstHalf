
(function(){
    'use strict';
    var cgiEmailValidator = function(){
        var directiveObj = {};
        directiveObj.restrict="A";
        directiveObj.require="ngModel";
        directiveObj.link=function (scope,element,attrs,ctl) {
         ctl.$parsers.unshift(validate);
            ctl.$formatters.unshift(validate);
            function validate(viewVal){
                var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                var emailRegex = new RegExp(pattern);
                var isValid =emailRegex.test(viewVal);
                console.log(isValid);

                ctl.$setValidity('cgiEmailValidator',isValid);
                return viewVal;
            }
        };

        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiEmailValidator',[cgiEmailValidator])
})();/**
 * Created by Administrator on 5/10/2016.
 */
