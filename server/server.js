const express = require('express');
var app = express();
const variables = require('./config/variables.express');

// setup db connection
require('./config/mongoose.connection');
// set up app with middleware
require('./config/config.express')(app);
// setup app with route end points
require('./config/routes.express')(app);

// application server
app.listen(process.env.PORT || 8080, function() {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + process.env.PORT);
});
