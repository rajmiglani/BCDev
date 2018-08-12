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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('./Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _NGO = require('../ethereum/NGO');

var _NGO2 = _interopRequireDefault(_NGO);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\AYUSH MIGLANI\\Desktop\\ETHIndia\\App@Hackathon\\components\\Contribute.js';


var Contribute = function (_Component) {
    (0, _inherits3.default)(Contribute, _Component);

    function Contribute() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Contribute);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contribute.__proto__ || (0, _getPrototypeOf2.default)(Contribute)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            donation: 0,
            errorMsg: '',
            loading: false
        }, _this.handleSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var currentNGO, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMsg: '' });
                                currentNGO = (0, _NGO2.default)(_this.props.address);
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.prev = 6;
                                _context.next = 9;
                                return currentNGO.methods.contribute().send({
                                    from: accounts[1],
                                    value: _web2.default.utils.toWei(_this.state.donation, 'ether'),
                                    gas: '2000000'
                                });

                            case 9:
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](6);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 14:
                                _this.setState({ loading: false });

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[6, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Contribute, [{
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
            }, 'Happy Donating'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleSubmit, error: !!this.state.errorMsg, __source: {
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
            }, 'Amount to Donate'), _react2.default.createElement(_semanticUiReact.Input, { label: 'ether', value: this.state.donation,
                onChange: function onChange(event) {
                    return _this3.setState({ donation: event.target.value });
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
            }, 'Donate')));
        }
    }]);

    return Contribute;
}(_react.Component);

exports.default = Contribute;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiTkdPIiwid2ViMyIsIkNvbnRyaWJ1dGUiLCJzdGF0ZSIsImRvbmF0aW9uIiwiZXJyb3JNc2ciLCJsb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiY3VycmVudE5HTyIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJmcm9tIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwiZ2FzIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBTSxBQUFPLEFBQU07O0FBQzNCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUNYOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRjtzQkFBUSxBQUNLLEFBQ1Q7c0JBRkksQUFFSyxBQUNUO3FCQUhJLEEsQUFHSTtBQUhKLEFBQ0osaUIsQUFJSjtpR0FBZSxpQkFBQSxBQUFPLE9BQVA7Z0NBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1g7c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFVBQTVCLEFBQWMsQUFBdUIsQUFDL0I7QUFISyw2Q0FHUSxtQkFBSSxNQUFBLEFBQUssTUFIakIsQUFHUSxBQUFlO2dEQUh2Qjt1Q0FJYSxjQUFBLEFBQUssSUFKbEIsQUFJYSxBQUFTOztpQ0FBM0I7QUFKSyxvREFBQTtnREFBQTtnREFBQTtrREFNRCxBQUFXLFFBQVgsQUFBbUIsYUFBbkIsQUFDTDswQ0FDUSxTQURILEFBQ0csQUFBUyxBQUNkOzJDQUFNLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsVUFGaEMsQUFFSSxBQUFxQyxBQUMzQzt5Q0FWRyxBQU1ELEFBQ0EsQUFHRTtBQUhGLEFBQ0YsaUNBRkU7O2lDQU5DO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQWVQOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFTLFlBZmpCLEFBZVAsQUFBYyxBQUFnQjs7aUNBRW5DO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBakJILEFBaUJaLEFBQWMsQUFBUzs7aUNBakJYO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBb0JQO3lCQUNKOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNBO0FBREE7QUFBQSxhQUFBLGtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSxtQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsY0FBYyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBakQsQUFBdUQ7OEJBQXZEO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURBLEFBQ0EsQUFDQSxxQ0FBQSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxTQUFRLE9BQVEsS0FBQSxBQUFLLE1BQWxDLEFBQXdDLEFBQ3hDOzBCQUFVLHlCQUFBOzJCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxNQUFBLEFBQU0sT0FBckMsQUFBTyxBQUFjLEFBQXVCO0FBRHREOzhCQUFBO2dDQUhKLEFBQ0ksQUFFQSxBQUdBO0FBSEE7aUNBR0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQix3QkFBdUIsU0FBUyxLQUFBLEFBQUssTUFBM0QsQUFBaUU7OEJBQWpFO2dDQU5KLEFBTUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQVZSLEFBQ0ksQUFFQSxBQU9JLEFBTVg7Ozs7O0FBM0NvQixBLEFBOEN6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FZVVNIIE1JR0xBTkkvRGVza3RvcC9FVEhJbmRpYS9BcHBASGFja2F0aG9uIn0=