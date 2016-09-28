import express from 'express';
const app = express();
import variables from './config/variables.express';

require('./config/mongoose.connection');
require('./config/config.express');
require('./config/routes.express')(app);

app.listen(variables.EXPRESS_PORT, () => {
  console.log(variables.EXPRESS_LISTEN_MESSAGE + variables.EXPRESS_PORT);
});


