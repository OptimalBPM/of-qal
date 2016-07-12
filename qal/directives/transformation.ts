console.log("Before transformation definition");

import "angular";
import { TransformationController } from "../controllers/transformation";
import { upgradeAdapter } from "/optimalbpm/upgrade.adapter";

export const transformationDirective = {
    scope: {
        parentController: "="
    },
    controller: TransformationController,
    link: ($scope: any, element: JQuery) => {
        console.log("link function in transformation directive called ");
    }
};

console.log("After transformation definition");

export const TransformationComponent = upgradeAdapter.upgradeNg1Component('transformation');



