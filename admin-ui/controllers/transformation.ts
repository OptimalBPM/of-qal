/// <reference path="../typings/tsd.d.ts" />


import "angular";
import "angular-schema-form";
import {transformation_form} from "./schema-forms";

interface TransformationScope extends ng.IScope {
    controller: TransformationController;
}


export class TransformationController {

    $timeout: ng.ITimeoutService;
    $http: ng.IHttpService;
    $q: ng.IQService;

    form: any;
    parentController: any;

    hello = (): string => {
        return "HI!";
    };


    constructor(private $scope: TransformationScope, $http: ng.IHttpService, $q: ng.IQService, $timeout: ng.ITimeoutService) {

        /*this.uiTreeHelper = UiTreeHelper;*/
        this.$timeout = $timeout;
        this.$http = $http;
        this.$q = $q;
        this.$scope.controller = this;
        this.parentController = ($scope as any).parentController;

        this.form = transformation_form();

        console.log("Initiated the transformation controller" + $scope.toString());

    }

}