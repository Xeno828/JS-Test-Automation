export default {
  'src_folders': ['/features'],
  'page_objects_path': ['./features/page_object'],
  'globals_path': './globals/index.js',
  'test_settings': {
    'default': {
      'selenium_port': 80,
      'selenium_host': 'ondemand.saucelabs.com',
      'live_output': true,
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': false,
        'path': '/screenshots/',
      },
      'protocol': 'http',
      'proxy': '',
      'username': 'bruenj',
      'access_key': 'db8ba08c-0fcf-4e16-8cec-cb95d2bf7263',
      'desiredCapabilities': {
        'browserName': 'firefox',
        'version': '58',
        'platform': 'WIN7',
        'handlesAlerts': true,
        'javascriptEnabled': true,
        'name': 'Dashboard test',
        'nativeEvents': true,
        'elementScrollBehaviour': 1,
        'tunnel-identifier': 'DIGITALSTUDIOSECURE',
        'parentTunnel': 'RBS_Admin',
      },
    },
  },
}
