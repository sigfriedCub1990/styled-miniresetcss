"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MiniReset = void 0;

var _styledComponents = require("styled-components");

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  /*! minireset.css v0.0.5 | MIT License | github.com/jgthms/minireset.css */\n  html,\n  body,\n  p,\n  ol,\n  ul,\n  li,\n  dl,\n  dt,\n  dd,\n  blockquote,\n  figure,\n  fieldset,\n  legend,\n  textarea,\n  pre,\n  iframe,\n  hr,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0;\n    padding: 0;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 100%;\n    font-weight: normal;\n  }\n\n  ul {\n    list-style: none;\n  }\n\n  button,\n  input,\n  select,\n  textarea {\n    margin: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: inherit;\n  }\n\n  img,\n  video {\n    height: auto;\n    max-width: 100%;\n  }\n\n  iframe {\n    border: 0;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  td,\n  th {\n    padding: 0;\n    text-align: left;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var minireset = (0, _styledComponents.css)(_templateObject());
var MiniReset = (0, _styledComponents.createGlobalStyle)(_templateObject2(), minireset);
exports.MiniReset = MiniReset;
var _default = minireset;
exports["default"] = _default;