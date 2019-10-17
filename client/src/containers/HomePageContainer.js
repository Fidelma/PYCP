import React, {Component} from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';

class HomePageContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
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

  }
  render(){
    return(
      <>
      <h1>HomePageContainer</h1>
      <h4> {this.state.people[0].name.firstName}</h4>
      <ContactContainer people={this.state.people}/>
      <PersonContainer people={this.state.people}/>
      </>
    )
  }
}

export default HomePageContainer
