const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Activity = new Schema({
  title: String,
  day: String,
  startTime: String,
  endTime: String,
  age: [String],
  gender: String,
  location: String,
  description: String
})

const Person = new Schema({
  name: {
    firstName: String,
    lastName: String,
    index: true
  },
  gender: String,
  dob: Date,
  address: {
    address: String,
    postcode: String
  },
  primaryContact: Number,
  secondaryContact: Number,
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
  collection: {
    toBeCollected: Boolean,
    byWho: String
  },
  siblings: {
    exists: Boolean,
    siblings: [{
      type: Schema.ObjectId,
      ref: 'Person'
    }]
  },
  ethnicity: String,
  volunteering: Boolean,
  signed: {
    signed: Boolean,
    name: String,
    relationship: String,
    date: {
      type: Date,
      default: Date.now
    }
  },
  restrictions: {
    exists: Boolean,
    type: String,
    notes: String
  }
})
