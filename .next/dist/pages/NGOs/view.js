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
                description: "NGO requests a minimum amount",
                style: { overflowWrap: 'break-word' }
            }, {
                header: requestsCount,
                meta: "Total Requests",
                description: "Toatl donation requests made",
                style: { overflowWrap: 'break-word' }
            }, {
                header: balance,
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
                    lineNumber: 54
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'NGO Statistics')), this.renderCards());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxOR09zXFx2aWV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FyZCIsIk5HTyIsIlZpZXdOR08iLCJwcm9wcyIsImJhbGFuY2UiLCJOR09hZGRyZXNzIiwicmVxdWVzdHNDb3VudCIsImNvbnRyaWJ1dGVyc0NvdW50IiwibWluQ29udHJpYnV0aW9uIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInJlbmRlckNhcmRzIiwidmlld05HTyIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVE7O0FBQ1IsQUFBTyxBQUFTOzs7Ozs7Ozs7SUFFVixBOzs7Ozs7Ozs7OztzQ0FjVzt5QkFDb0UsS0FEcEUsQUFDeUU7Z0JBRHpFLEFBQ0YsaUJBREUsQUFDRjtnQkFERSxBQUNNLG9CQUROLEFBQ007Z0JBRE4sQUFDaUIsdUJBRGpCLEFBQ2lCO2dCQURqQixBQUMrQiwyQkFEL0IsQUFDK0I7Z0JBRC9CLEFBQ2lELHlCQURqRCxBQUNpRCxBQUMxRDs7Z0JBQU07d0JBQ0YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0FMQSxBQUNYLEFBSVUsQUFBZTtBQUp6QixBQUNJLGFBRk87d0JBT1gsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0FYQSxBQU9YLEFBSVUsQUFBZTtBQUp6QixBQUNJO3dCQUtKLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7NkJBSEosQUFHZ0IsQUFDWjt1QkFBTSxFQUFDLGNBakJBLEFBYVgsQUFJVSxBQUFlO0FBSnpCLEFBQ0k7d0JBS0osQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0F2QkEsQUFtQlgsQUFJVSxBQUFlO0FBSnpCLEFBQ0k7d0JBS0osQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0E3QmYsQUFBZSxBQXlCWCxBQUlVLEFBQWUsQUFHN0I7QUFQSSxBQUNJO2lEQU1BLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFSLEFBQVEsQUFDWDtBQURXO2FBQUE7Ozs7aUNBRUosQUFDSjttQ0FDQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLCtCQUFLLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURULEFBQ0ksQUFBSyxBQUNKLHlCQUhMLEFBQ0EsQUFFSyxBQUFLLEFBSWI7Ozs7O2lILEFBekQ0Qjs7Ozs7aUNBQ25CO0EsMENBQVUsbUJBQUksTUFBQSxBQUFNLE1BQVYsQUFBZ0IsQTs7dUNBQ1YsUUFBQSxBQUFRLFFBQVIsQUFBZ0IsYSxBQUFoQixBQUE2Qjs7aUNBQTdDO0EsbURBQ047O0FBQ0E7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O3FEQUVRLFFBRGIsQUFDYSxBQUFRLEFBQ3hCOzZDQUFRLFFBRkwsQUFFSyxBQUFRLEFBQ2hCO21EQUFjLFFBSFgsQUFHVyxBQUFRLEFBQ3RCO3VEQUFrQixRQUpmLEFBSWUsQUFBUSxBQUMxQjtnREFBVyxRQUxSLEFBS1EsQUFBUSxBO0FBTGhCLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFQVSxBLEFBOER0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJ2aWV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FZVVNIIE1JR0xBTkkvRGVza3RvcC9FVEhJbmRpYS9BcHBASGFja2F0aG9uIn0=