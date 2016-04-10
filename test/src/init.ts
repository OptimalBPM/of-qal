///<reference path="../../admin-ui/typings/angularjs/angular.d.ts" />

import IAugmentedJQuery = angular.IAugmentedJQuery;
;
/**
 * @ngdoc overview
 * @name mainApp
 * @description
 * QAL wrapper
 *
 * Main module of the test application
 */


import "jquery";
import "objectpath";
import "tv4";

import "bootstrap";
import "bootstrap/css/bootstrap.css!";

import "angular-sanitize";
import "angular-schema-form";
import "angular-schema-form-bootstrap";

import {TransformationController} from "../../admin-ui/controllers/transformation";
import {FakeParentController} from "./fake_parent_controller";

import {transformation} from "../../admin-ui/directives/transformation";


function initApp() {

    let exampleApp: ng.IModule = angular.module("exampleApp", ["schemaForm"]);

    // Register all controllers
    exampleApp.controller("transformationController", ["$scope", "$http", "$q", "$timeout", TransformationController]);
    exampleApp.controller("fakeParentController", ["$scope", "$http", FakeParentController]);

    // Register all directives
    exampleApp.directive("transformation", transformation);


    console.log("Added controllers");
    // Find the html angular element.
    let $html: IAugmentedJQuery = angular.element(document.getElementsByTagName("html")[0]);

    angular.element().ready(() => {
        // bootstrap the app manually
        console.log("Bootstrap the application.");
        angular.bootstrap($html, ["exampleApp"]);

    });

}

// Initialize
initApp();