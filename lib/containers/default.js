'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _react=require('react'),_react2=_interopRequireDefault(_react),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_main=require('../components/main'),_main2=_interopRequireDefault(_main),_actions=require('../actions'),_reactRedux=require('react-redux');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var DefaultModal=function(a){var b=a.closedByOverlay,c=a.onCloseCallback,d=a.children;return _react2.default.createElement(_main2.default,{onClose:function onClose(){c&&c(),(0,_actions.hideModal)()},closedByOverlay:b},d)};DefaultModal.propTypes={children:_propTypes2.default.oneOfType([_propTypes2.default.string,_propTypes2.default.node,_propTypes2.default.element]),onCloseCallback:_propTypes2.default.func,hideModal:_propTypes2.default.func,closedByOverlay:_propTypes2.default.bool},DefaultModal.defaultProps={closedByOverlay:!0},exports.default=(0,_reactRedux.connect)(null,{hideModal:_actions.hideModal})(DefaultModal);