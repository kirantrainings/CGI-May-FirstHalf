describe('JobList Controller Test', function () {

    var scope;
    var myScope={
        vow:"Hey I am the new Scope"
    };
    //create module
    beforeEach(function () {
        module('app')
    });

    //create the controller instance
    //create scope instance
    //inject the scope to the controller
    beforeEach(inject(function ($rootScope, $controller) {
            scope=$rootScope.$new();

        scope.test="This is to test";
             $controller('jobListCtrl',{
                 $scope:scope
             })
        })
    );

    describe(':Unit test', function () {

        it('should have scope defined', function () {
          expect(scope).toBeDefined();
        });
        it('should have the jobs defined', function () {
            expect(scope.jobs).toBeDefined();
        });
        it('jobs length should equal to 2', function () {
            expect(scope.jobs.length).toEqual(2);
        });
        /*it('should add a job to the list', function () {

        });*/
    })
});