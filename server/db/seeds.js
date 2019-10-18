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
     person1.primaryContact = '07921809601'
     person1.secondaryContact = '01334675849'
     person1.emergencyContact.name = 'Amy'
     person1.emergencyContact.relationship = 'Wife'
     person1.emergencyContact.number = '07921809605'
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
     person1.signed.date = '2019/10/17'
     person1.timeOut.exists = true
     person1.timeOut.reason = 'ban for inappropriate behaviour'
     person1.timeOut.notes = '1 week'

     person1.save(function(err){
       if(err)throw err;
       console.log("person saved");
     });

     const person2 = new Person()
       person2.name.firstName = 'Fidelma'
       person2.name.lastName = 'Beagan'
       person2.gender = 'female'
       person2.dob = '12/12/2001'
       person2.address.address = 'black street'
       person2.address.postcode = 'EH12 8GX'
       person2.primaryContact = '07921809601'
       person2.secondaryContact = '01334675849'
       person2.emergencyContact.name = 'Amy'
       person2.emergencyContact.relationship = 'Wife'
       person2.emergencyContact.number = '07921809605'
       person2.email = 'gav@hotmail.com'
       person2.dietaryRequirements.exists = true
       person2.dietaryRequirements.details = 'does not eat food'
       person2.medicalConditions.exists = true
       person2.medicalConditions.details = 'heart condition'
       person2.medicalConditions.medications = 'medication 1'
       person2.allergies.exists = true
       person2.allergies.alergens = ['eggs', 'nuts']
       person2.allergies.other = 'allergic to the colour red'
       person2.doctorsSurgery = 'Pilton GP'
       person2.community = 'West Pilton'
       person2.school.name = 'Pilton Junior School'
       person2.school.year = 'P7'
       person2.photographyPermission = false
       person2.pickUp.toBeCollected = true
       person2.pickUp.byWho = 'Amy Black'
       person2.siblings.exists = true
       person2.siblings.siblings = [person1]
       person2.ethnicity = 'white Scottish'
       person2.volunteering = true
       person2.signed.signed = true
       person2.signed.name = 'Amy Black'
       person2.signed.relationship = 'Wife'
       person2.signed.date = '2019/10/17'
       person2.timeOut.exists = true
       person2.timeOut.reason = 'ban for inappropriate behaviour'
       person2.timeOut.notes = '1 week'

       person2.save(function(err){
         if(err)throw err;
         console.log("person saved");
       });

});
