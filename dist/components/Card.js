"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = _ref => {
  let {
    label
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      border: '1px solid red'
    }
  }, "This is a card");
};
var _default = Card;
exports.default = _default;