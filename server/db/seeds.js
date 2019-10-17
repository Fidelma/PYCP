var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pycp');

Activity = require ('../models/activityModel');
Person = require ('../models/personModel');


const ccard = new Activity()
  ccard.title = 'c-card drop in',
  ccard.day = 'Wednesday',
  ccard.startTime = '17.15',
  ccard.endTime = '18.15',
  ccard.age = ['s1', 's2', 's3', 's4'],
  ccard.gender = 'Both',
  ccard.location = 'pycp',
  ccard.description = 'Free condoms and advice on sexual health'

ccard.save(function(err){
  if(err)throw err;
  console.log("activity saved");
});
const fridays = new Activity()
  fridays.title = 'Funky Fridays',
  fridays.day = 'Friday',
  fridays.startTime = '13.30',
  fridays.endTime = '15.00',
  fridays.age = ['p1', 'p2'],
  fridays.gender = 'both',
  fridays.location = 'pycp',
  fridays.description = 'Fun activities, arts and crafts, games and sports!'

fridays.save(function(err){
  if(err)throw err;
  console.log("activity saved");
});
