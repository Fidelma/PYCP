import React, {Component} from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';
import ActivityContainer from './ActivityContainer';
import RegistrationContainer from './RegistrationContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class HomePageContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      activities: [
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
      ],
      people: [{
        name: {
          firstName: 'Harry',
          lastName: 'Hood'
        },
        gender: 'male',
        dob: Date,
        address: {
          address: 'Castle Terrace',
          postcode: 'EH1 3JW'
        },
        primaryContact: '07777283647',
        secondaryContact: null,
        emergencyContact: {
          name: 'Ben',
          relationship: 'Complicated',
          number: '077763542621'
        },
        email: 'ben@hotmail.com',
        dietaryRequirements: {
          exists: false,
          details: null
        },
        medicalConditions: {
          exists: false,
          details: null,
          medications: null
        },
        allergies: {
          exists: false,
          allergens: [],
          other:null
        },
        doctorsSurgery: 'Conan Doyle Surgery',
        community: 'Muirhouse',
        school: {
          name: 'Pilton',
          year: 'P3'
        },
        photographyPermission: true,
        collection: {
          toBeCollected: false,
          byWho: null
        },
        siblings: {
          exists: false,
          siblings: [{
            type: null,
            ref: null
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
        restrictions: {
          exists: false,
          type: null,
          notes: ''
        }

      },
      {
        name: {
          firstName: 'Barry',
          lastName: 'Bood'
        },
        gender: 'male',
        dob: Date,
        address: {
          address: 'Castle Terrace',
          postcode: 'EH1 3JW'
        },
        primaryContact: '07777283647',
        secondaryContact: null,
        emergencyContact: {
          name: 'Ben',
          relationship: 'Complicated',
          number: '077763542621'
        },
        email: 'ben@hotmail.com',
        dietaryRequirements: {
          exists: false,
          details: null
        },
        medicalConditions: {
          exists: false,
          details: null,
          medications: null
        },
        allergies: {
          exists: false,
          allergens: [],
          other:null
        },
        doctorsSurgery: 'Conan Doyle Surgery',
        community: 'Muirhouse',
        school: {
          name: 'Pilton',
          year: 'P3'
        },
        photographyPermission: true,
        collection: {
          toBeCollected: false,
          byWho: null
        },
        siblings: {
          exists: false,
          siblings: [{
            type: null,
            ref: null
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
        restrictions: {
          exists: false,
          type: null,
          notes: ''
        }

      }]
    }

    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
  }

  renderMain(props) {
    return (
      <h1>HomePageContainer</h1>
    )
  }

  renderContact(props) {
    return (
      <ContactContainer people = {this.state.people}/>
    )
  }

  renderActivities(props) {
    return (
      <ActivityContainer activities={this.state.activities}/>
    )
  }

  render(){
    return(
      <Router>
        <React.Fragment>
        <Route exact path="/" render={this.renderMain} />
        <Route exact path="/registration" component={RegistrationContainer} />
        <Route exact path="/contact" render={this.renderContact} />
        <Route exact path="/activities" render={this.renderActivities} />
        </React.Fragment>
      </Router>





    )
  }
}

export default HomePageContainer
