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
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.5.3",
    "angular-schema-form": "github:json-schema-form/angular-schema-form@0.8.13",
    "angular-schema-form-bootstrap": "npm:angular-schema-form-bootstrap@0.2.0",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jquery": "npm:jquery@2.2.2",
    "objectpath": "npm:objectpath@1.2.1",
    "tv4": "npm:tv4@1.2.7",
    "typescript": "npm:typescript@1.8.9",
    "github:angular/bower-angular-sanitize@1.5.3": {
      "angular": "github:angular/bower-angular@1.5.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:angular-schema-form-bootstrap@0.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    }
  }
});
