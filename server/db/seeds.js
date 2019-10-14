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
]);

db.persons.insertMany([
  {
    name: {
      firstName: 'Harry',
      lastName: 'Hood'
    },
    gender: 'male'
    // dob: Date,
    // address: {
    //   address: 'Castle Terrace',
    //   postcode: 'EH1 3JW'
    // },
    // primaryContact: 07777283647,
    // secondaryContact: ,
    // emergencyContact: {
    //   name: Ben,
    //   relationship: 'Complicated',
    //   number: 077763542621
    // },
    // email: 'ben@hotmail.com',
    // dietaryRequirements: {
    //   exists: false,
    //   details:
    // },
    // medicalConditions: {
    //   exists: false,
    //   details: ,
    //   medications:
    // },
    // allergies: {
    //   exists: false,
    //   allergens: [],
    //   other:
    // },
    // doctorsSurgery: 'Conan Doyle Surgery',
    // community: 'Muirhouse',
    // school: {
    //   name: 'Pilton',
    //   year: 'P3'
    // },
    // photographyPermission: true,
    // collection: {
    //   toBeCollected: false,
    //   byWho:
    // },
    // siblings: {
    //   exists: false,
    //   siblings: [{
    //     type: Schema.ObjectId,
    //     ref:
    //   }]
    // },
    // ethnicity: 'White Scottish',
    // volunteering: false,
    // signed: {
    //   signed: true,
    //   name: 'Ben',
    //   relationship: 'complicated',
    //   date: {
    //     type: Date,
    //     default: Date.now
    //   }
    // },
    // restrictions: {
    //   exists: false,
    //   type: ,
    //   notes:
    // }

  }
])
