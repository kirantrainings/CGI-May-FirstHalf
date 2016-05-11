'use strict';
app.controller('jobListCtrl', [
    '$scope', function($scope) {
        $scope.jobs = [];


        $scope.addJob = function(job) {
            $scope.jobs.push(job);
        };
        var initializeController = function() {

            $scope.jobs = [
                { name: '.Net', description: "we have an opening for .net" },
                { name: 'java', description: "we have an opening for java" }
            ];
        };

        initializeController();
    }
]);