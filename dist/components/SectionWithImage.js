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
const SectionWithImage = _ref => {
  let {
    image,
    title,
    body,
    buttonText,
    flip = false
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Container, {
    flip: flip
  }, /*#__PURE__*/_react.default.createElement(ImageSection, null, ' ', /*#__PURE__*/_react.default.createElement(StyledImage, {
    src: image
  })), /*#__PURE__*/_react.default.createElement(ContentSection, null, /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Body, null, body, " "), /*#__PURE__*/_react.default.createElement(_Button.default, {
    label: buttonText,
    variant: 'secondary'
  })));
};
const Container = (0, _styled.default)('div', {
  shouldForwardProp: prop => prop !== 'flip'
})(_ref2 => {
  let {
    flip
  } = _ref2;
  return {
    display: 'flex',
    flexDirection: flip ? 'row-reverse' : 'row',
    color: _colors.colors.black.base,
    width: '100%',
    height: 'auto',
    background: _colors.colors.white.base
  };
});
const ImageSection = _styled.default.div({
  flexBasis: '50%',
  minWidth: '50%',
  height: 'auto,'
});
const ContentSection = _styled.default.div({
  flexBasis: '50%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 8rem'
});
const StyledImage = _styled.default.img({
  width: '100%',
  height: 'auto'
});
const Title = _styled.default.h2({
  fontFamily: 'Prata',
  color: _colors.colors.black.base,
  fontSize: '4rem',
  margin: 0
});
const Body = _styled.default.p({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  color: _colors.colors.black.dark,
  lineHeight: 1.5,
  margin: '3rem 0'
});
var _default = SectionWithImage;
exports.default = _default;