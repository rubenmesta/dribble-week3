"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _colors = require("../utils/colors");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Navbar = _ref => {
  let {
    items
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(Nabar, null, /*#__PURE__*/_react.default.createElement(NavContainer, null, /*#__PURE__*/_react.default.createElement(Logo, null, "Logo"), /*#__PURE__*/_react.default.createElement(NavbarItems, null, items.map(item => {
    return /*#__PURE__*/_react.default.createElement(Item, null, item);
  }))));
};
const Nabar = _styled.default.nav({
  background: _colors.colors.primary.dark,
  color: _colors.colors.white.base,
  widdth: '100%'
});
const NavContainer = _styled.default.div({
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  fontSize: '1.2rem'
});
const Logo = _styled.default.div({});
const NavbarItems = _styled.default.div({
  display: 'flex'
});
const Item = _styled.default.div({
  margin: '0 1rem',
  '&:first-of-type': {
    marginLeft: 0
  },
  '&:last-of-type': {
    marginRight: 0
  }
});
var _default = Navbar;
exports.default = _default;