use pycp;
db.dropDatabase();

db.activities.insertMany([
  {
    title: 'c-card drop in',
    day: 'Wednesday',
    startTime: '17.15',
    endTime: '18.15',
    age: ['s1', 's2', 's3', 's4'],
    gender: 'Both',
    location: 'pycp',
    description: 'Free condoms and advice on sexual health'
  },
  {
    title: 'Funky Fridays',
    day: 'Friday',
    startTime: '13.30',
    endTime: '15.00',
    age: ['p1', 'p2'],
    gender: 'both',
    location: 'pycp',
    description: 'Fun activities, arts and crafts, games and sports!'
  }
])


db.people.insertMany([
 {
   name: {
     firstName: 'Harry',
     lastName: 'Hood'
   },
   gender: 'male',
   dob: '11/06/1981',
   address: {
     address: 'Castle Terrace',
     postcode: 'EH1 3JW'
   },
   primaryContact: 07777283647,
   // secondaryContact: ,
   emergencyContact: {
     name: 'Ben',
     relationship: 'Complicated',
     number: 077763542621
   },
   email: 'ben@hotmail.com',
   dietaryRequirements: {
     exists: false,
     details: 'null'
   }
   ,
   medicalConditions: {
     exists: false,
     details: 'null',
     medications: 'null'
   },
   allergies: {
     exists: false,
     allergens: [],
     other:'null'
   },
   doctorsSurgery: 'Conan Doyle Surgery',
   community: 'Muirhouse',
   school: {
     name: 'Pilton',
     year: 'P3'
   },
   photographyPermission: true,
   pickUp: {
     toBeCollected: false,
     byWho: 'null'
   },
   siblings: {
     exists: false,
     siblings: [{
       // type: Schema.ObjectId,
       // ref: 'Person'
     }]
   },
   ethnicity: 'White Scottish',
   volunteering: false,
   signed: {
     signed: true,
     name: 'Ben',
     relationship: 'complicated',
     date: {
       type: Date,
       default: Date.now
     }
   },
   timeOut: {
     exists: false,
     type: 'null',
     notes: 'null'
   }
 }
])


// {
//   "name": {
//     "firstName" : "Harry",
//     "lastName" : "Hood"
//   },
//   "gender" : "male",
//   "dob" : "11/06/1981",
//   "address" : {
//     "address" : "Castle Terrace",
//     "postcode" : "EH1 3JW"
//   },
//   "primaryContact" : "07777283647",
//   "emergencyContact": {
//     "name": "Ben",
//     "relationship": "Complicated",
//     "number": "077763542621"
//   },
//   "email": "ben@hotmail.com",
//   "dietaryRequirements": {
//     "exists": "false",
//     "details": "null"
//   }
//   ,
//   "medicalConditions": {
//     "exists": "false",
//     "details": "null",
//     "medications": "null"
//   },
//   "allergies": {
//     "exists": "false",
//     "allergens": [],
//     "other":"null"
//   },
//   "doctorsSurgery": "Conan Doyle Surgery",
//   "community": "Muirhouse",
//   "school": {
//     "name": "Pilton",
//     "year": "P3"
//   },
//   "photographyPermission": "true",
//   "pickUp": {
//     "toBeCollected": "false",
//     "byWho": "null"
//   },
//   "siblings": {
//     "exists": "false",
//     "siblings": [{
//
//     }]
//   },
//   "ethnicity": "White Scottish",
//   "volunteering": "false",
//   "signed": {
//     "signed": "true",
//     "name": "Ben",
//     "relationship": "complicated",
//     "date": {
//
//     }
//   },
//   "restrictions": {
//     "exists": "false",
//     "type": "null",
//     "notes": "null"
//   }
// }
