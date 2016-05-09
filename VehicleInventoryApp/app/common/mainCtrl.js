(function(){
    'use strict';
    var mainCtrlFn= function($scope,lookupFact){
        $scope.navBarUrl='app/header/header.tpl.html';
        $scope.footerUrl='app/footer/footer.tpl.html';
       // $scope.tabs= lookupFact.getNavigationTabs();

        lookupFact.getNavigationTabsFromApi()
            .success(function (response){
              $scope.tabs=response.tabs;
            })
            .error(function (response){
                console.log(response);
            });
        $scope.loadContent=function(type){
            $scope.contentUrl=type.templateUrl;
        };
    };
    angular.module('vehicleInventory')
        .controller('mainCtrl',
            ['$scope','lookupFact',mainCtrlFn])
})();