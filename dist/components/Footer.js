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
const Footer = _ref => {
  let {
    image,
    title,
    body,
    buttonText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(StyledFooter, null, /*#__PURE__*/_react.default.createElement(FooterContainer, null, /*#__PURE__*/_react.default.createElement("h1", {
    style: {
      fontFamily: 'Prata'
    }
  }, "Footer"), /*#__PURE__*/_react.default.createElement(FooterItems, null, /*#__PURE__*/_react.default.createElement(ItemsTitle, null, "Title Here"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item")), /*#__PURE__*/_react.default.createElement(FooterItems, null, /*#__PURE__*/_react.default.createElement(ItemsTitle, null, "Title Here"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item")), /*#__PURE__*/_react.default.createElement(FooterItems, null, /*#__PURE__*/_react.default.createElement(ItemsTitle, null, "Title Here"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item"), /*#__PURE__*/_react.default.createElement(Item, null, "Item")), /*#__PURE__*/_react.default.createElement(Logo, null, "Logo")));
};
const StyledFooter = _styled.default.div({
  background: _colors.colors.primary.dark,
  color: _colors.colors.white.base,
  widdth: '100%'
});
const FooterContainer = _styled.default.div({
  height: '200px',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem',
  padding: '2rem'
});
const Logo = _styled.default.div({});
const FooterItems = _styled.default.div({
  display: 'flex',
  flexDirection: 'column'
});
const ItemsTitle = _styled.default.h4({
  fontFamily: 'Prata',
  fontSize: '1.3rem',
  margin: 0
});
const Item = _styled.default.div({
  lineHeight: 1.5
});
var _default = Footer;
exports.default = _default;