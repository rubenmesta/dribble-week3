"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Card = _ref => {
  let {
    image,
    title,
    body,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledCard, null, /*#__PURE__*/_react.default.createElement("div", null, ' ', /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: image
  })), /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Body, null, body, " "), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: buttonText,
    variant: 'primary'
  })));
};
const StyledCard = _styled.default.div({
  border: "1px solid ".concat(_colors.colors.teritary.base),
  borderRadius: '8px',
  color: _colors.colors.black.base,
  width: '350px',
  background: _colors.colors.white.base
});
const StyledImage = _styled.default.img({
  width: '100%',
  height: 'auto',
  borderRadius: '8px 8px 0 0'
});
const Container = _styled.default.div({
  padding: '1rem 1rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});
const Title = _styled.default.h4({
  fontFamily: 'Prata',
  color: _colors.colors.secondary.base,
  margin: 0
});
const Body = _styled.default.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: _colors.colors.black.dark,
  lineHeight: 1.5
});
var _default = Card;
exports.default = _default;