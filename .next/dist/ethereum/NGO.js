'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _NGO = require('./build/NGO.json');

var _NGO2 = _interopRequireDefault(_NGO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_NGO2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxOR08uanMiXSwibmFtZXMiOlsid2ViMyIsIm1lcmFOR08iLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVEsQUFBUixBQUFrQixBQUFsQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFvQixBQUFwQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDeEI7V0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDSCxLQUFLLEFBQUwsTUFBVyxjQUFRLEFBQW5CLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6Ik5HTy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BWVVTSCBNSUdMQU5JL0Rlc2t0b3AvRVRISW5kaWEvQXBwQEhhY2thdGhvbiJ9