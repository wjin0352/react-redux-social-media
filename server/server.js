import connect from './connect';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

connect().then(function() {
  app.listen(3000, () => {
    console.log('app listening on 3000');
  })
}).catch(function(err) {
  console.log('somethings wrong')
})

exports.app = app;
