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
    disableCloseBkg = _ref$disableCloseBkg === void 0 ? false : _ref$disableCloseBkg;
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

// class Modal extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       hideModal: true,
//       content: this.props.content,
//     }
//   }

//   closeModal() {
//     console.log('coucou2')
//     this.setState({ hideModal: true })
//   }

//   openModal() {
//     console.log('coucou')
//     this.setState({ hideModal: false })
//   }

//   render() {
//     const { hideModal } = this.state
//     console.log(this.state)
//     return (
//       <div
//         className={'simple-modal-container ' + (hideModal ? 'hide-modal' : '')}
//       >
//         <div className="simple-modal">
//           <p>{'oui'}</p>
//           <div
//             onClick={() => this.closeModal()}
//             className="simple-modal-close"
//           ></div>
//         </div>
//       </div>
//     )
//   }
// }
var _default = Modal;
exports.default = _default;