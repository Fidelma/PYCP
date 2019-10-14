'use strict';
const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = 'mongodb://127.0.0.1:27017/pycp'
const Schema = mongoose.Schema;
const Activity = require('./schema')

mongoose.connect(connection)
// .then((client) => {
//   const db = client.db('pycp');
//   const activities = db.collection('activities');
//   const activitiesRouter = createRouter(activities);
//   app.use('/activities', activitiesRouter);
// })
// .catch(console.err);

// const uri = 'mongodb://localhost/pycp';
// global.db = mongoose.createConnection(uri);

// const routes = require('./routes');

// const app = express();
// app.get('/', routes.home);
// app.get('/insert', routes.insert);
// app.get('/name', routes.modelName);

app.listen(3000, function() {
  console.log('listening on http://localhost:3000');
});
