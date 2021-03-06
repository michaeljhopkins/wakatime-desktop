/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../../../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

var _helpersRemapAsyncToGenerator = require("../../helpers/remap-async-to-generator");

var _helpersRemapAsyncToGenerator2 = _interopRequireDefault(_helpersRemapAsyncToGenerator);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _bluebirdCoroutines = require("./bluebird-coroutines");

exports.manipulateOptions = _bluebirdCoroutines.manipulateOptions;
var metadata = {
  optional: true,
  dependencies: ["es7.asyncFunctions", "es6.classes"]
};

exports.metadata = metadata;
var visitor = {
  Function: function Function(node, parent, scope, file) {
    if (!node.async || node.generator) return;

    return _helpersRemapAsyncToGenerator2["default"](this, file.addHelper("async-to-generator"));
  }
};
exports.visitor = visitor;