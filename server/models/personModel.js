const mongoose = require('mongoose');
const personSchema = mongoose.Schema({

   name: {
     firstName: String,
     lastName: String
   },
   gender: String,
   dob: String,
   address: {
     address: String,
     postcode: String
   },
   primaryContact: Number,
   secondaryContact: { type: Number, required: false},
   emergencyContact: {
     name: String,
     relationship: String,
     number: Number
   },
   email: String,
   dietaryRequirements: {
     exists: Boolean,
     details: String
   },
   medicalConditions: {
     exists: Boolean,
     details: String,
     medications: String
   },
   allergies: {
     exists: Boolean,
     allergens: [String],
     other: String
   },
   doctorsSurgery: String,
   community: String,
   school: {
     name: String,
     year: String
   },
   photographyPermission: Boolean,
   pickUp: {
     toBeCollected: Boolean,
     byWho: String
   },
 siblings: {
   exists: Boolean
 },
 ethnicity: String,
 volunteering: Boolean,
 signed: {
   signed: Boolean,
   name: String,
   relationship: String
 },
 timeOut: {
   exists: Boolean,
   reason: String,
   notes: String
 }
 })

const Person = module.exports = mongoose.model('person', personSchema);
module.exports.get = function (callback, limit) {
    Person.find(callback).limit(limit);
}
