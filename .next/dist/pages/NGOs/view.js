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

var _NGO = require('../../ethereum/NGO');

var _NGO2 = _interopRequireDefault(_NGO);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Contribute = require('../../components/Contribute');

var _Contribute2 = _interopRequireDefault(_Contribute);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\AYUSH MIGLANI\\Desktop\\ETHIndia\\App@Hackathon\\pages\\NGOs\\view.js?entry';


var ViewNGO = function (_Component) {
    (0, _inherits3.default)(ViewNGO, _Component);

    function ViewNGO() {
        (0, _classCallCheck3.default)(this, ViewNGO);

        return (0, _possibleConstructorReturn3.default)(this, (ViewNGO.__proto__ || (0, _getPrototypeOf2.default)(ViewNGO)).apply(this, arguments));
    }

    (0, _createClass3.default)(ViewNGO, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                NGOaddress = _props.NGOaddress,
                requestsCount = _props.requestsCount,
                contributersCount = _props.contributersCount,
                minContribution = _props.minContribution;

            var items = [{
                header: NGOaddress,
                meta: "Address of NGO",
                description: "NGO account address",
                style: { overflowWrap: 'break-word' }
            }, {
                header: minContribution,
                meta: "Minimum Contribution Requested",
                description: "NGO requests a minimum amount in Wei",
                style: { overflowWrap: 'break-word' }
            }, {
                header: requestsCount,
                meta: "Total Requests",
                description: "Toatl donation requests made",
                style: { overflowWrap: 'break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance),
                meta: "Current Balance of the NGO",
                description: "Current balance",
                style: { overflowWrap: 'break-word' }
            }, {
                header: contributersCount,
                meta: "Total Contributers",
                description: "Total contributers for this NGO",
                style: { overflowWrap: 'break-word' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'NGO Statistics')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), this.renderCards(), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }), _react2.default.createElement(_routes.Link, { route: '/NGOs/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'View Requests'))), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }), _react2.default.createElement(_Contribute2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var viewNGO, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                viewNGO = (0, _NGO2.default)(props.query.address);
                                _context.next = 3;
                                return viewNGO.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                //const NGO_add = await meraNGO.methods.getOnBoardedNGOs().call();
                                console.log(summary);
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    contributersCount: summary[3],
                                    NGOaddress: summary[4]
                                });

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ViewNGO;
}(_react.Component);

exports.default = ViewNGO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxOR09zXFx2aWV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIkJ1dHRvbiIsIk5HTyIsIndlYjMiLCJDb250cmlidXRlIiwiTGluayIsIlZpZXdOR08iLCJwcm9wcyIsImJhbGFuY2UiLCJOR09hZGRyZXNzIiwicmVxdWVzdHNDb3VudCIsImNvbnRyaWJ1dGVyc0NvdW50IiwibWluQ29udHJpYnV0aW9uIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsInZpZXdOR08iLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBSzs7QUFDYixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7c0NBZVc7eUJBQ29FLEtBRHBFLEFBQ3lFO2dCQUR6RSxBQUNGLGlCQURFLEFBQ0Y7Z0JBREUsQUFDTSxvQkFETixBQUNNO2dCQUROLEFBQ2lCLHVCQURqQixBQUNpQjtnQkFEakIsQUFDK0IsMkJBRC9CLEFBQytCO2dCQUQvQixBQUNpRCx5QkFEakQsQUFDaUQsQUFDMUQ7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBTEEsQUFDWCxBQUlVLEFBQWU7QUFKekIsQUFDSSxhQUZPO3dCQU9YLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBWEEsQUFPWCxBQUlVLEFBQWU7QUFKekIsQUFDSTt3QkFLSixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU0sRUFBQyxjQWpCQSxBQWFYLEFBSVUsQUFBZTtBQUp6QixBQUNJO3dCQU1PLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFEdEIsQUFDVyxBQUFtQixBQUMxQjtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBdkJBLEFBbUJYLEFBSVUsQUFBZTtBQUp6QixBQUNJO3dCQUtKLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBN0JmLEFBQWUsQUF5QlgsQUFJVSxBQUFlLEFBRzdCO0FBUEksQUFDSTtpREFNQSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUixBQUFRLEFBQ1g7QUFEVzthQUFBOzs7O2lDQUVKLEFBQ0o7bUNBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSwrQkFBSyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEVCxBQUNJLEFBQUssQUFDTDs7OEJBQUE7Z0NBRkosQUFFSSxBQUNDO0FBREQ7QUFBQSxxQkFGSixBQUdLLEFBQUssQUFDTjs7OEJBQUE7Z0NBSkosQUFJSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLDhCQUFLLGtCQUFnQixLQUFBLEFBQUssTUFBckIsQUFBMkIsVUFBakM7OEJBQUE7Z0NBQUEsQUFDQTtBQURBOytCQUNBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBUFIsQUFLSSxBQUNBLEFBQ0ksQUFHSjs7OEJBQUE7Z0NBVkosQUFVSSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBWEosQUFXSSxBQUNBO0FBREE7QUFBQTs7OEJBQ0E7Z0NBWkosQUFZSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLHNDQUFXLFNBQVMsS0FBQSxBQUFLLE1BQTFCLEFBQWdDOzhCQUFoQztnQ0FkSixBQUNBLEFBYUksQUFJUDtBQUpPOzs7Ozs7aUhBakVxQixBOzs7OztpQ0FDbkI7QSwwQ0FBVSxtQkFBSSxNQUFBLEFBQU0sTUFBVixBQUFnQixBOzt1Q0FDVixRQUFBLEFBQVEsUUFBUixBQUFnQixhQUFoQixBQUE2QixBOztpQ0FBN0M7QSxtREFDTjs7QUFDQTt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7NkNBRUEsTUFBQSxBQUFNLE1BRFgsQUFDaUIsQUFDcEI7cURBQWdCLFFBRmIsQUFFYSxBQUFRLEFBQ3hCOzZDQUFRLFFBSEwsQUFHSyxBQUFRLEFBQ2hCO21EQUFjLFFBSlgsQUFJVyxBQUFRLEFBQ3RCO3VEQUFrQixRQUxmLEFBS2UsQUFBUSxBQUMxQjtnREFBVyxRQUFBLEEsQUFOUixBQU1nQjtBQU5oQixBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUFUsQSxBQTBFdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidmlldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BWVVTSCBNSUdMQU5JL0Rlc2t0b3AvRVRISW5kaWEvQXBwQEhhY2thdGhvbiJ9