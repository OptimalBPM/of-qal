///<reference path="../../admin-ui/typings/angularjs/angular.d.ts" />

import IAugmentedJQuery = angular.IAugmentedJQuery;;
/**
 * @ngdoc overview
 * @name mainApp
 * @description
 * QAL wrapper
 *
 * Main module of the test application
 */



import "jquery";


import "bootstrap";
import "bootstrap/css/bootstrap.css!";


import {TransformationController} from "../../admin-ui/controllers/transformation";


function initApp() {


    let exampleApp: any = angular.module("exampleApp",
        [
            // "ngRoute", "mgcrea.ngStrap", "ui.tree", "ui.ace", "schemaForm", "ui.layout", "ngAnimate", "schemaTreeModule"
        ]);

    // Register all controllers
    exampleApp.controller("TransformationController", ["$scope", "$http", "$q", "$timeout", TransformationController]);

    console.log("Added controllers")
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