System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "typescript",
  paths: {
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.5.3",
    "typescript": "npm:typescript@1.8.9"
  }
});
