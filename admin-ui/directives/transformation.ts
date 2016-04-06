
/**
 * Created by nibo on 2015-09-05.
 */
/// <reference path="../typings/angularjs/angular.d.ts" />
/// <reference path="../typings/jquery/jquery.d.ts" />


"use strict";

import "angular";




export function Transformation(): ng.IDirective {
    return {
        restrict: "E",
        scope: {
            parentController: "="
        },
        controller: "TransformationController",
        link: ($scope: any, element: JQuery) => {
            console.log("link function in process directive called ");
        },
        templateUrl: "../admin-ui/views/transformation.html"
    };

}

