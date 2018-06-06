export default {
  'src_folders': ['/features'],
  'page_objects_path': ['./features/page_object'],
  'globals_path': './globals/index.js',
  'selenium': {
    'start_process': true,
    'server_path': './lib/selenium-server-standalone-3.12.0.jar',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.gecko.driver': './lib/geckodriver',
      'webdriver.firefox.profile': 'default',
    },
  },
  'test_settings': {
    'default': {
      'selenium_port': 4444,
      'selenium_host': 'localhost',
      'live_output': true,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': false,
        'path': '/screenshots/',
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'platform': 'ANY',
        'handlesAlerts': true,
        'javascriptEnabled': true,
        'marionette': true,
        'acceptSslCerts': true,
        'nativeEvents': true,
        'acceptInsecureCerts': true,
        'elementScrollBehaviour': 1,
      },
    },
  },
}
