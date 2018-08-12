const routes = require('next-routes')();
routes
.add('/NGOs/new','/NGOs/new')
.add('/NGOs/:address','/NGOs/view')

module.exports = routes; 