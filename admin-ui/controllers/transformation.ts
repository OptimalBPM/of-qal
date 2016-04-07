/// <reference path="../typings/tsd.d.ts" />


import "angular";
import "angular-schema-form";

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

        this.form = [
            {
                "type": "fieldset",
                "title": "Actions on destination",

                "items": [
                    {
                        "key": "insert",
                        "description": "Insert items in source, but not in destination",
                        "type": "checkbox"

                    },
                    {
                        "key": "delete",
                        "description": "Delete items in destination, but not in source",
                        "type": "checkbox"
                    },
                    {
                        "key": "update",
                        "description": "Update if item in source, but not in destination",
                        "type": "checkbox"
                    }
                ]

            }

        ];

        console.log("Initiated the transformation controller" + $scope.toString());

    }

}