(function(){
    'use strict';
    var mainCtrlFn= function($scope,lookupFact,$state,$rootScope){
        $scope.navBarUrl='app/header/header.tpl.html';
        $scope.footerUrl='app/footer/footer.tpl.html';
       // $scope.tabs= lookupFact.getNavigationTabs();
        $scope.vehiclesForCheckout=[];
        lookupFact.getNavigationTabsFromApi()
            .then(function (response){
              $scope.tabs=response.tabs;
            })
            .catch(function (response){
                console.log(response);
            });
        $scope.loadContent=function(type){
            $scope.contentUrl=type.templateUrl;
        };
        
        $rootScope.$on('VEHICLE_SELECTED_FOR_CHECKOUT',function(evnt,args){
           $scope.vehiclesForCheckout.push(args.data); 
        });
        $rootScope.$on('VEHICLE_REMOVED_FROM_CHECKOUT',function(evnt,args){
           var index=$scope.vehiclesForCheckout.indexOf(args.data);
            $scope.vehiclesForCheckout.splice(index,1);
        });
        $state.go('home');
    };
    angular.module('vehicleInventory')
        .controller('mainCtrl',
            ['$scope','lookupFact','$state','$rootScope',mainCtrlFn])
})();