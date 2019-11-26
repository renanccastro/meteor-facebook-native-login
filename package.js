Package.describe({
  name: 'renanccastro:facebook-native-login',
  version: '0.2.1',
  // Brief, one-line summary of the package.
  summary: 'Use native api to login with Facebook',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/renanccastro/meteor-facebook-native-login.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Npm.depends({
  "chai": "3.5.0",
  "sinon":"1.17.4",
  "sinon-chai": "2.8.0",
  "underscore":"1.8.3"
});

Cordova.depends({
  "cordova-plugin-facebook4": "https://github.com/renanccastro/cordova-plugin-facebook4/tarball/74c9ce748405568ba92cc76f60b3bf1c931558fc"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use("accounts-base");
  api.use("accounts-facebook");
  api.use("http");
  api.imply("accounts-facebook");
  api.addFiles("NativeFacebookLoginHandler.js", 'server');
  api.mainModule("index.js")
});


Package.onTest(function(api) {

  api.use("ecmascript");
  api.use("http");
  api.use("renanccastro:facebook-native-login");
  api.use("practicalmeteor:mocha@2.4.5_2");

  api.addFiles("tests/client.js", "client");
  api.addFiles("tests/server.js", "server");
  api.addFiles("tests/facebook_connect_tests.js", "client");

});
