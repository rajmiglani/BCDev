const routes = require('next-routes')();
routes
.add('/NGOs/new','/NGOs/new')
.add('/NGOs/:address','/NGOs/view')
.add('/NGOs/:address/requests','/NGOs/requests/index')

module.exports = routes; 