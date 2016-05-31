import {TransformationController} from "./controllers/transformation";
import {transformation} from "./directives/transformation";

export function initFramework(app, $routeProvider) {
    app.controller("TransformationController", ["$scope", "$http", "$q", "$timeout", TransformationController]);

    app.directive("transformation", transformation);
    
    console.log("initFramework for OF-QAL was run");
};
