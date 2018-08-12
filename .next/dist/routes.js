'use strict';

var routes = require('next-routes')();
routes.add('/NGOs/new', '/NGOs/new').add('/NGOs/:address', '/NGOs/view').add('/NGOs/:address/requests', '/NGOs/requests/index');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjtBQUNBLE9BQ0MsQUFERCxJQUNLLEFBREwsYUFDaUIsQUFEakIsYUFFQyxBQUZELElBRUssQUFGTCxrQkFFc0IsQUFGdEIsY0FHQyxBQUhELElBR0ssQUFITCwyQkFHK0IsQUFIL0I7O0FBS0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9BWVVTSCBNSUdMQU5JL0Rlc2t0b3AvRVRISW5kaWEvQXBwQEhhY2thdGhvbiJ9