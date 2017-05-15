'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _react=require('react'),_react2=_interopRequireDefault(_react),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes),_reactRedux=require('react-redux'),_styledComponents=require('styled-components'),_confirmation=require('./confirmation'),_confirmation2=_interopRequireDefault(_confirmation),_default=require('./default'),_default2=_interopRequireDefault(_default),_theme=require('../theme'),_theme2=_interopRequireDefault(_theme),_constant=require('../constant'),_lodash=require('lodash.merge'),_lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Modal=function(a){var b,c=a.modal,d=a.theme,e=d===void 0?{}:d,f=(b={},_defineProperty(b,_constant.MODAL_TYPE_CONFIRMATION,_confirmation2.default),_defineProperty(b,_constant.MODAL_TYPE_DEFAULT,_default2.default),b);if(!c.type)return!1;var g=(0,_lodash2.default)(_theme2.default,e),h=f[c.type];return!!h&&_react2.default.createElement(_styledComponents.ThemeProvider,{theme:g},_react2.default.createElement(h,c.props))};Modal.propTypes={modal:_propTypes2.default.object,theme:_propTypes2.default.object},exports.default=(0,_reactRedux.connect)(function(a){var b=a.modal;return{modal:b}})(Modal);