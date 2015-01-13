var http = require('http'),
    express = require('express'),
    port = process.env.PORT || 1234;
var app = express();
require('./server/config/express.js')(app);
require('./server/config/routes.js')(app);

app.listen(port);
console.log('Server running on port ' + port);