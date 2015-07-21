(function() {

  'use strict';

  var fs = require('fs');
  var os = require('os');
  var path = require('path');
  var pwuid = require('pwuid');
  var whoami = require('whoami-exec');

  angular.module('plugin-manager', []).
  factory('PluginManager', [PluginManagerService]);

  function PluginManagerService() {
    var Service = {};

    Service.checkOS = function(win_cb, mac_cb, linux_cb) {
      switch(os.platform) {
        case 'darwin':
          mac_cb();
          break;
        case 'win32':
          win_cb();
          break;
        case 'win64':
          win_cb();
          break;
        case 'linux':
          linux_cb();
          break;
        default:
          console.error('Unsupported OS detected: ' + process.platform);
      }
    };

    Service.getSublimeSettings = function() {
      Service.checkOS(
        // Windows
        function() {},
        // Mac
        function() {

        },
        // Linux
        function() {}
      );
    };
  };

})();
