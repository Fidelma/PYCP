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
    location: ,
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
