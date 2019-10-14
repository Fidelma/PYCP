const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Activity = require('./db/Activity.model.js')


const port = 27017;
const db = 'mongodb://localhost/pycp';

mongoose.connect(db);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
 res.send('happy to be here');
});

app.get('/activities', function(req, res) {
 console.log('getting all activities');
 Activity.find({})
   .exec(function(err, activities) {
     if(err) {
       res.send('error occured')
     } else {
       console.log(activities);
       res.json(activities);
     }
   });
});



app.listen(27017, function() {
  console.log('listening on http://localhost:27017');
});
