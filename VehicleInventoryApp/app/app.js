/**
 * Created by Administrator on 5/9/2016.
 */

angular.module('vehicleInventory',
    ['vehicleInventory.register',
    'vehicleInventory.vehicles']);

angular.module('vehicleInventory')
.config(function(){
    console.log("I am the Main Module");
});