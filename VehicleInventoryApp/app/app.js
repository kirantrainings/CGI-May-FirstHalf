/**
 * Created by Administrator on 5/9/2016.
 */

angular.module('vehicleInventory',
    ['vehicleInventory.register',
    'vehicleInventory.vehicles',
    'ui.router']);

angular.module('vehicleInventory')
.config(['$stateProvider','$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');
        var home={
          url:"/home",
          templateUrl:"app/home/home.html",
            controller:'homeCtrl',
            params:{userData:""}
        };
        var contacts={
            name:'home.contacts',
            templateUrl:'app/home/home.contacts.html'
        };
        var login={
            url:"/login",
            templateUrl:"app/login/login.tpl.html",
        };
        var register={
            url:'/register',
            templateUrl:"app/register/register.tpl.html",
            controller:'registerCtrl'
        };
        var vehicles={
            url:'/vehicles',
            templateUrl:"app/vehicles/newVehicle.tpl.html",
            controller:'vehicleCtrl'
        };
        
        $stateProvider.state('home',home);
        $stateProvider.state('login',login);
        $stateProvider.state('register',register);
        $stateProvider.state('vehicles',vehicles);

}]);