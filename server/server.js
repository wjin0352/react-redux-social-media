const express = require('express');
var app = express();
const variables = require('./config/variables.express');

// setup db connection
require('./config/mongoose.connection');
// set up app with middleware
require('./config/config.express')(app);
// setup app with routers
require('./config/routes.express')(app);

app.listen(variables.EXPRESS_PORT, function() {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});


