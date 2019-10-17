var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pycp');

Activity = require ('../models/activityModel');
Person = require ('../models/personModel');

Activity.remove({}, function(err) {
   console.log('activity collection removed')

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


});

Person.remove({}, function(err) {
   console.log('person collection removed')

   const person1 = new Person()
     person1.name.firstName = 'Gav'
     person1.name.lastName = 'Black'
     person1.gender = 'male'
     person1.dob = '12/12/2001'
     person1.address.address = 'black street'
     person1.address.postcode = 'EH12 8GX'
     person1.primaryContact = 07921809601
     person1.secondaryContact = 01334675849
     person1.emergencyContact.name = 'Amy'
     person1.emergencyContact.relationship = 'Wife'
     person1.emergencyContact.number = 07921809605
     person1.email = 'gav@hotmail.com'
     person1.dietaryRequirements.exists = true
     person1.dietaryRequirements.details = 'does not eat food'
     person1.medicalConditions.exists = true
     person1.medicalConditions.details = 'heart condition'
     person1.medicalConditions.medications = 'medication 1'
     person1.allergies.exists = true
     person1.allergies.alergens = ['eggs', 'nuts']
     person1.allergies.other = 'allergic to the colour red'
     person1.doctorsSurgery = 'Pilton GP'
     person1.community = 'West Pilton'
     person1.school.name = 'Pilton Junior School'
     person1.school.year = 'P7'
     person1.photographyPermission = false
     person1.pickUp.toBeCollected = true
     person1.pickUp.byWho = 'Amy Black'
     person1.siblings.exists = false
     person1.ethnicity = 'white Scottish'
     person1.volunteering = true
     person1.signed.signed = true
     person1.signed.name = 'Amy Black'
     person1.signed.relationship = 'Wife'
     person1.timeOut.exists = true
     person1.timeOut.reason = '1 week'
     person1.timeOut.notes = 'ban for inappropriate behaviour'

     person1.save(function(err){
       if(err)throw err;
       console.log("person saved");
     });

});
