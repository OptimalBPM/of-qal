/// <reference path="../typings/tsd.d.ts" />


import "angular";

export class TransformationController {

    $timeout: ng.ITimeoutService;
    $http: ng.IHttpService;
    $q: ng.IQService;
    $scope: ng.IScope;


    parentController: any;


    hello = (): string => {
        return "HI!";
    };


    
    constructor(private $scope: ng.IScope, $http: ng.IHttpService, $q: ng.IQService, $timeout: ng.ITimeoutService) {



        /*this.uiTreeHelper = UiTreeHelper;*/
        this.$timeout = $timeout;
        this.$http = $http;
        this.$q = $q;
        this.$scope = $scope;



        console.log("Initiated the transformation controller" + $scope.toString());

    }

}