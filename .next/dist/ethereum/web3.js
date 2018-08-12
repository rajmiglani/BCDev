"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default("http://localhost:8545");

/* if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser
    web3 = new Web3(window.web3.currentProvider);
} else {
    // either we don't have metamask or we are on server
    const provider = new Web3.providers.HttpProvider (
        'https://rinkeby.infura.io/v3/f9cdef76f9cc4a568ba708ce504ee3dd'
    );
    web3 = new Web3(provider);
} */

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVA7Ozs7OztBQUVBLElBQU0sT0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFiOztBQUVBLEFBV0E7Ozs7Ozs7Ozs7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BWVVTSCBNSUdMQU5JL0Rlc2t0b3AvRVRISW5kaWEvQXBwQEhhY2thdGhvbiJ9