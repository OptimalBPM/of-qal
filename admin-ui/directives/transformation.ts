
/**
 * Created by nibo on 2015-09-05.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />


"use strict";

import "angular";

export function transformation(): ng.IDirective {
    return {
        restrict: "E",
        scope: {
            parentController: "="
        },
        controller: "transformationController",
        link: ($scope: any, element: JQuery) => {
            console.log("link function in transformation directive called ");
        },
        templateUrl: "../admin-ui/views/transformation.html"
    };

}

