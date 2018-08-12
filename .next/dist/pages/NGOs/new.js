'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _meraNGO = require('../../ethereum/meraNGO');

var _meraNGO2 = _interopRequireDefault(_meraNGO);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\AYUSH MIGLANI\\Desktop\\ETHIndia\\App@Hackathon\\pages\\NGOs\\new.js?entry';


var NGO = function (_Component) {
    (0, _inherits3.default)(NGO, _Component);

    function NGO() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, NGO);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = NGO.__proto__ || (0, _getPrototypeOf2.default)(NGO)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: 0,
            errorMsg: '',
            loading: false
        }, _this.handleSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMsg: '' });
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.prev = 5;
                                _context.next = 8;
                                return _meraNGO2.default.methods.onboardNGO(_this.state.minimumContribution).send({
                                    from: accounts[1],
                                    gas: '2000000'
                                });

                            case 8:
                                _routes.Router.pushRoute('/');
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(NGO, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'A step into decentralization'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, { label: 'wei', value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Something went wrong', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'On Board')));
        }
    }]);

    return NGO;
}(_react.Component);

exports.default = NGO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxOR09zXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwibWVyYU5HTyIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTkdPIiwic3RhdGUiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJvbmJvYXJkTkdPIiwic2VuZCIsImZyb20iLCJnYXMiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFNLEFBQU8sQUFBTTs7QUFDM0IsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFRLEFBQUssQUFBYTs7Ozs7OztJQUVwQixBOzs7Ozs7Ozs7Ozs7Ozs7ME0sQUFDRjtpQ0FBTSxBQUNrQixBQUNwQjtzQkFGRSxBQUVPLEFBQ1Q7cUJBSEUsQUFHTSxBO0FBSE4sQUFDRixpQixBQUlKO2lHQUFlLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDWDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssVUFGakIsQUFFWCxBQUFjLEFBQXVCO2dEQUYxQjt1Q0FHYSxjQUFBLEFBQUssSUFIbEIsQUFHYSxBQUFTOztpQ0FBM0I7QUFISyxvREFBQTtnREFBQTtnREFBQTt5REFLRCxBQUFRLFFBQVIsQUFBZ0IsV0FBVyxNQUFBLEFBQUssTUFBaEMsQUFBc0MscUJBQXRDLEFBQ0w7MENBQ1EsU0FESCxBQUNHLEFBQVMsQUFDZDt5Q0FSRyxBQUtELEFBQ0EsQUFFRTtBQUZGLEFBQ0YsaUNBRkU7O2lDQUtOOytDQUFBLEFBQU8sVUFWQSxBQVVQLEFBQWlCO2dEQVZWO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWFQOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFTLFlBYmpCLEFBYVAsQUFBYyxBQUFnQjs7aUNBRW5DO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBZkgsQUFlWixBQUFjLEFBQVM7O2lDQWZYO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBa0JQO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSxpREFBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsY0FBYyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBakQsQUFBdUQ7OEJBQXZEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSx5Q0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxPQUFNLE9BQVEsS0FBQSxBQUFLLE1BQWhDLEFBQXNDLEFBQ3RDOzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQW9CLE1BQUEsQUFBTSxPQUFoRCxBQUFPLEFBQWMsQUFBa0M7QUFEakU7OEJBQUE7Z0NBSEosQUFDSSxBQUVBLEFBR0E7QUFIQTtpQ0FHQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLHdCQUF1QixTQUFTLEtBQUEsQUFBSyxNQUEzRCxBQUFpRTs4QkFBakU7Z0NBTkosQUFNSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBVlIsQUFDSSxBQUVBLEFBT0ksQUFNWDs7Ozs7QUF6Q2EsQSxBQTRDbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FZVVNIIE1JR0xBTkkvRGVza3RvcC9FVEhJbmRpYS9BcHBASGFja2F0aG9uIn0=