/// <reference path="../typings/tsd.d.ts" />


import "angular";

export class TransformationController {

    $timeout:ng.ITimeoutService;
    

    constructor(private $scope: TransformationScope, $http:ng.IHttpService, $q:ng.IQService, $timeout:ng.ITimeoutService/*, UiTreeHelper: any*/) {
        console.log("Initiating the process controller" + $scope.toString());
        super($scope, $http, $q);

        /*this.uiTreeHelper = UiTreeHelper;*/
        this.$timeout = $timeout;

        $timeout(() => {
            // Set height
            this.resizeProcess();
            $(window).resize(() => {
                this.resizeProcess();
            });
        });
        this.menuTreeOptions= {
            beforeDrop: this.onBeforeDrop
        };

        this.loadProcesses();
        console.log("Initiated the process controller");

    }
    
}