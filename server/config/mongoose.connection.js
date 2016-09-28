import mongoose from 'mongoose';
import config from './config.express';
mongoose.connect(config.MONGODB.URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('Connected to mongoDB');
});
