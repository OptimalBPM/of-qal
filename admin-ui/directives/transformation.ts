/// <reference path="../typings/tsd.d.ts" />

import "angular";

import "jquery";
import "angular-ui-select";
import {Transformation} from  "../types/schemaTreeTypes";


export function nodes(): ng.IDirective {
exampleApp.directive('TransformationsIncludeDirective', function () {

    return {
        require: [],
        restrict: 'A',
        scope: false,
        // Define a controller, use the function from above, inject the scope
        controller: ['$scope', exampleIncludeController],
        link: function (scope, iElement, iAttrs, ngModelCtrl) {
           console.log("In example directive link function");
        }
    };
});