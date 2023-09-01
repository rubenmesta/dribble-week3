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
const Hero = _ref => {
  let {
    image,
    logo,
    backgroundColor,
    title,
    subhtitle,
    primaryCta
  } = _ref;
  const Container = _ref2 => {
    let {
      children
    } = _ref2;
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(".concat(image, ")"),
        display: 'flex',
        alignItems: 'center',
        backgroundColor: backgroundColor && backgroundColor,
        height: '80vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 0
      }
    }, children);
  };
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(Wrapper, null, /*#__PURE__*/_react.default.createElement(Logo, {
    src: logo
  }), /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Subtitle, null, subhtitle, " "), primaryCta && /*#__PURE__*/_react.default.createElement(_Button.default, null)));
};
const Wrapper = _styled.default.div({
  width: '100%',
  height: 'auto'
});
const Logo = _styled.default.img({
  padding: '1rem',
  width: '400px'
});
const Title = _styled.default.h4({
  fontFamily: 'Prata',
  fontSize: '4rem',
  color: _colors.colors.secondary.base,
  margin: 0
});
const Subtitle = _styled.default.p({
  fontFamily: 'Montserrat',
  fontSize: '1.5rem',
  color: _colors.colors.white.base,
  lineHeight: 1.5
});
var _default = Hero;
exports.default = _default;