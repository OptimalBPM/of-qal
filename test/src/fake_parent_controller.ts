/// <reference path="../../admin-ui/typings/tsd.d.ts" />


import "angular";

export class FakeParentController {
    $scope: ng.IScope;
    $http: ng.IHttpService;

    schema: any;
    model: any;


    loadSchema = (url: string): any => {
        return this.$http.get(url)
            .success((data: any) => {
                this.schema = data;
            })
            .error((data: any, status: number, headers: ng.IHttpHeadersGetter, config: ng.IRequestConfig) => {
                alert("Loading schema failed: " + status);
            });

    };
    
    loadModel = (url: string): any => {
        return this.$http.get(url)
            .success((data: any) => {
                this.model = data;
            })
            .error((data: any, status: number, headers: ng.IHttpHeadersGetter, config: ng.IRequestConfig) => {
                alert("Loading model failed: " + status);
            });

    };

    constructor(private $scope: ng.IScope, $http: ng.IHttpService) {


        this.$scope = $scope;
        this.$http = $http;


        this.loadSchema("/qal-plugin/schemas/transformation.json")
            .then(() => {
                this.loadModel("model.json").then(() => {
                    console.log(this.model);
                    console.log(this.schema);
                });
            });
        console.log("Initiated the FakeParentController controller" + $scope.toString());

    }

}