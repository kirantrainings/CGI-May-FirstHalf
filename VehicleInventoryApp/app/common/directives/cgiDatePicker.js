/**
 * Created by Administrator on 5/10/2016.
 */
/**
 * Created by Administrator on 5/10/2016.
 */

(function(){
    'use strict';
    var cgiDatePicker = function(){
        var directiveObj = {};
        directiveObj.restrict="A";
        directiveObj.link=function(scope,element,attrs){
            var config={};
            if(attrs['maxdate']){
                config.maxDate=attrs['maxdate'];
            }
            if(attrs['mindate']){
                config.minDate=attrs['mindate'];
            }
            element.datepicker(config);

        };
        return directiveObj;
    };
    angular.module('vehicleInventory')
        .directive('cgiDatePicker',[cgiDatePicker])
})();