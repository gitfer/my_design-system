"use strict";

var _react = require("@storybook/react");

var _react2 = _interopRequireDefault(require("react"));

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react.storiesOf)("Button", module).add("with text", function () {
  return _react2.default.createElement(Button, {
    onClick: action("clicked")
  }, "Hello Button");
}).add("with some emoji", function () {
  return _react2.default.createElement(Button, {
    onClick: action("clicked")
  }, _react2.default.createElement("span", {
    role: "img",
    "aria-label": "so cool"
  }, "\uD83D\uDE00 \uD83D\uDE0E \uD83D\uDC4D \uD83D\uDCAF"));
});