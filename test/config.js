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
    "/qal-plugin/admin-ui/views": {
    },
    "/qal-plugin/admin-ui/admin-ui/plugins": {
      "defaultExtension": "ts"
    },
    "/qal-plugin/test/src": {
      "defaultExtension": "ts"
    }
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.3",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "jquery": "npm:jquery@2.2.2",
    "typescript": "npm:typescript@1.8.9",
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    }
  }
});
