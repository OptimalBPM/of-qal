import "angular";
import "angular-schema-form";
import {transformation_form, getResourcetypes} from "./schema-forms";

interface TransformationScope extends ng.IScope {
    controller: TransformationController;
}

export class TransformationController {

    form: any;

    parentController: any;

    hello = (): string => {
        return "HI!";
    };

    listResourceTypes = () => {
        return getResourcetypes();
    };
    
    $onInit(){
        console.log("link function in transformation directive called ");
    }

    static $inject = ["$scope", "$http", "$q", "$timeout"];

    constructor(public $scope: TransformationScope, public $http: ng.IHttpService, public $q: ng.IQService, public $timeout: ng.ITimeoutService) {

        /*this.uiTreeHelper = UiTreeHelper;*/
        this.$scope.controller = this;
        this.parentController = ($scope as any).parentController;

        this.form = transformation_form();

        console.log("Initiated the transformation controller" + $scope.toString());
    }

}