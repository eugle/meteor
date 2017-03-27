Package.describe({
  summary: 'Internal force-ssl common code.',
  version: '1.0.14-rc.2'
});

Npm.depends({
  'forwarded-http': '0.3.0'
});

Package.onUse(function (api) {
  api.use('ecmascript');
  api.mainModule('force_ssl_common.js', 'server');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.mainModule('force_ssl_tests.js', 'server');
});
