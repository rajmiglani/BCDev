'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _NGOs = require('./build/NGOs.json');

var _NGOs2 = _interopRequireDefault(_NGOs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//create a local copy of the SC deployed on the ETH BC in the browser
// run deploy.js to get these
var address = '0x4D22FDf663A0b8A5B66c4B111591FAcA5b82a517';

var meraNGO = new _web2.default.eth.Contract(JSON.parse(_NGOs2.default.interface), address);
exports.default = meraNGO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxtZXJhTkdPLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJOR09zIiwiYWRkcmVzcyIsIm1lcmFOR08iLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFDQTtBQUNBO0FBQ0EsSUFBTSxVQUFVLEFBQWhCOztBQUVBLElBQU0sVUFBVSxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FBc0IsS0FBSyxBQUFMLE1BQVcsZUFBSyxBQUFoQixBQUF0QixZQUFpRCxBQUFqRCxBQUFoQixBQUNBO2tCQUFlLEFBQWYiLCJmaWxlIjoibWVyYU5HTy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BWVVTSCBNSUdMQU5JL0Rlc2t0b3AvRVRISW5kaWEvQXBwQEhhY2thdGhvbiJ9