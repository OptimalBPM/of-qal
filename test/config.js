System.config({
  baseURL: "/qal-plugin/test",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  packages: {
    "/qal-plugin/admin-ui/controllers": {
      "defaultExtension": "ts"
    },
    "/qal-plugin/admin-ui/directives": {
      "defaultExtension": "ts"
    },
    "/qal-plugin/admin-ui/views": {},
    "/qal-plugin/admin-ui/admin-ui/plugins": {
      "defaultExtension": "ts"
    },
    "/qal-plugin/test/src": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.3",
    "angular-schema-form": "npm:angular-schema-form@0.8.13",
    "angular-schema-form-bootstrap": "npm:angular-schema-form-bootstrap@0.2.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jquery": "npm:jquery@2.2.2",
    "objectpath": "npm:objectpath@1.2.1",
    "tv4": "npm:tv4@1.2.7",
    "typescript": "npm:typescript@1.8.9",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:angular-sanitize@1.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular-schema-form-bootstrap@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:angular-schema-form@0.8.13": {
      "angular": "npm:angular@1.5.3",
      "angular-sanitize": "npm:angular-sanitize@1.5.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "objectpath": "npm:objectpath@1.2.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tv4": "npm:tv4@1.0.18"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
