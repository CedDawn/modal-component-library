"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _ = require("./");
function Modal(_ref) {
  var content = _ref.content,
    _ref$open = _ref.open,
    open = _ref$open === void 0 ? false : _ref$open,
    _ref$disableCloseBtn = _ref.disableCloseBtn,
    disableCloseBtn = _ref$disableCloseBtn === void 0 ? false : _ref$disableCloseBtn,
    _ref$disableCloseBkg = _ref.disableCloseBkg,
    disableCloseBkg = _ref$disableCloseBkg === void 0 ? false : _ref$disableCloseBkg,
    _ref$disableCloseEsca = _ref.disableCloseEscape,
    disableCloseEscape = _ref$disableCloseEsca === void 0 ? false : _ref$disableCloseEsca;
  if (disableCloseEscape === false) {
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        (0, _.handleClose)();
      }
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: open ? 'simple-modal-container' : 'simple-modal-container hide-modal'
  }, disableCloseBkg ? '' : /*#__PURE__*/_react.default.createElement("div", {
    onClick: _.handleClose,
    className: "simple-modal-closing-background"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "simple-modal"
  }, /*#__PURE__*/_react.default.createElement("p", null, content), disableCloseBtn ? '' : /*#__PURE__*/_react.default.createElement("div", {
    onClick: _.handleClose,
    className: "simple-modal-close"
  })));
}
var _default = Modal;
exports.default = _default;