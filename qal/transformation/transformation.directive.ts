console.log("Before transformation definition");

import "angular";
import { TransformationController } from "./transformation.controller";
import { upgradeAdapter } from "/admin/upgrade.adapter";

export const transformationDirective = {
    bindings: {
        parentController: "="
    },
    controller: TransformationController,
};

console.log("After transformation definition");

export const TransformationComponent = upgradeAdapter.upgradeNg1Component('transformation');



