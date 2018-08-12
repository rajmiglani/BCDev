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

var _meraNGO = require('../ethereum/meraNGO');

var _meraNGO2 = _interopRequireDefault(_meraNGO);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\AYUSH MIGLANI\\Desktop\\ETHIndia\\App@Hackathon\\pages\\index.js?entry';
//var $ = jQuery = require('jquery/dist/jquery.js');
//window.jQuery = $; // Assure it's available globally.


var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: 'renderNGOs',
        value: function renderNGOs() {
            var items = this.props.NGO_add.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/NGOs/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, 'View More'),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'meraNGO'), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, 'A decentralized marketplace for NGOs'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_routes.Link, { route: 'NGOs/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: 'On Board',
                icon: 'add circle',
                primary: true,
                floated: 'right',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }))), this.renderNGOs()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var NGO_add;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _meraNGO2.default.methods.getOnBoardedNGOs().call();

                            case 2:
                                NGO_add = _context.sent;
                                return _context.abrupt('return', { NGO_add: NGO_add });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIm1lcmFOR08iLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiTGluayIsIkFwcCIsIml0ZW1zIiwicHJvcHMiLCJOR09fYWRkIiwibWFwIiwiaGVhZGVyIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJOR09zIiwibWV0aG9kcyIsImdldE9uQm9hcmRlZE5HT3MiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFhOzs7O0FBR3BCLEFBQVEsQUFBSzs7QUFDYixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7OztBQUpuQjtBQUNBOzs7SUFLTSxBOzs7Ozs7Ozs7OztxQ0FPVSxBQUNSO2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixJQUFJLG1CQUFXLEFBQzVDOzs0QkFBTSxBQUNLLEFBQ1A7aURBQ0ksQUFBQyw4QkFBSyxrQkFBTixBQUFzQjtzQ0FBdEI7d0NBQUE7QUFBQTtxQkFBQSxFQUhGLEFBR0UsQUFJSjsyQkFQSixBQUFNLEFBT0ksQUFFYjtBQVRTLEFBQ0Y7QUFGUixBQUFjLEFBV2QsYUFYYztpREFXUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ0o7bUNBQ0EsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQTs7OEJBQ0k7Z0NBREosQUFDSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUVJLEFBQ0EsNEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSEosQUFHSSxBQUVBOzs4QkFBQTtnQ0FMSixBQUtJLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDO3lCQUFELEFBQ0ksQUFDUjtzQkFGSSxBQUVDLEFBQ0w7eUJBSEksQUFJSjt5QkFKSSxBQUlJOzs4QkFKSjtnQ0FSUixBQU1JLEFBQ0ksQUFDQSxBQVNIO0FBVEc7QUFDSix1QkFYSixBQUNBLEFBQ0EsQUFpQkssQUFBSyxBQUtiOzs7Ozs7Ozs7Ozs7dUNBNUN5QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsbUJBQWhCLEFBQW1DLEE7O2lDQUFuRDtBO2lFQUVDLEVBQUMsU0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSkcsQSxBQWdEbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvQVlVU0ggTUlHTEFOSS9EZXNrdG9wL0VUSEluZGlhL0FwcEBIYWNrYXRob24ifQ==