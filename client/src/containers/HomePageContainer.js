import React, {Component} from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';
import ActivityContainer from './ActivityContainer';
import RegistrationContainer from './RegistrationContainer';
import RestrictionsContainer from './RestrictionsContainer';
import NavBar from '../components/navigation/NavBar';
import Header from '../components/home/Header';
import Button from '../components/home/Button';
import ActivityRequest from '../services/ActivityServices.js'
import PeopleRequest from '../services/PeopleServices.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class HomePageContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      activities: [],
      people: [],
      displayActivityForm: false,
      edit: false,
      person: {
        name: {
          firstName: '',
          lastName: ''
        },
        gender: '',
        dob: '',
        address: {
          address: '',
          postcode: ''
        },
        email: '',
        primaryContact: '',
        secondaryContact: '',
        emergencyContact: {
          name: '',
          relationship: '',
          number: ''
        },
        dietaryRequirements: {
          exists: false,
          details: ''
        },
        medicalConditions: {
          exists: false,
          details: '',
          medications: ''
        },
        allergies: {
          exists: false,
          details: ''
        },
        doctorsSurgery: '',
        community: '',
        school: {
          name: '',
          year: ''
        },
        photographyPermission: true,
        pickUp: {
          toBeCollected: false,
          byWho: ''
        },
      siblings: {
        exists: false,
        siblings: []
        },
        ethnicity: '',
        volunteering: true,
        signed: {
          signed: false,
          name: '',
          relationship: '',
          date:''
        },
        timeOut: {
          exists: false,
          reason: '',
          notes: ''
        }
      }
    }

    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderPeople = this.renderPeople.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.renderRestrictions = this.renderRestrictions.bind(this);
    this.renderRegistration = this.renderRegistration.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.deleteActivity = this.deleteActivity.bind(this);
    this.updateActivity = this.updateActivity.bind(this);
    this.handleNewFormData = this.handleNewFormData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleEmergencyContactChange = this.handleEmergencyContactChange.bind(this);
    this.handleSignedChange = this.handleSignedChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
    this.handleDietaryDetailChange = this.handleDietaryDetailChange.bind(this);
    this.handleMedicalConditionsChange = this.handleMedicalConditionsChange.bind(this);
    this.handleMedicalDetailsChange = this.handleMedicalDetailsChange.bind(this);
    this.handleAllergyUpdate = this.handleAllergyUpdate.bind(this);
    this.handleAllergyDetailsChange = this.handleAllergyDetailsChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    this.handlePickUpChange = this.handlePickUpChange.bind(this);
    this.handlePickUpDetailsChange = this.handlePickUpDetailsChange.bind(this);
    this.handleSiblingsAdded = this.handleSiblingsAdded.bind(this);
    this.handleSiblingsChange = this.handleSiblingsChange.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleSignatureRadioButtonChange = this.handleSignatureRadioButtonChange.bind(this);
    this.editPersonDetails = this.editPersonDetails.bind(this);
    this.handleEditPersonSubmit = this.handleEditPersonSubmit.bind(this);
    this.resetEditToFalse = this.resetEditToFalse.bind(this);
  }

  handleNewFormData(data){
    console.log(data);
  }
  //handles changes to top level keys in person object

  handleChange(value, name) {
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        [name]: value
      }
    }));
  }

  handleNameUpdate(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        name: {
          ...prevState.person.name,
          [name]: value
        }
      }
    }));
  }

  handleAddressUpdate(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        address: {
          ...prevState.person.address,
          [name]: value
        }
      }
    }))
  }

  handleEmergencyContactChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        emergencyContact: {
          ...prevState.person.emergencyContact,
          [name]: value
         }
        }
    }))
  }

  handleSignedChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          signed: {
            ...prevState.person.signed,
            [name]: value
          }
        }
    }))
  }

  handleDietaryChange(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          dietaryRequirements: {
            ...prevState.person.dietaryRequirements,
            exists: !this.state.person.dietaryRequirements.exists,
            details: ''
          }
        }
    }))
  }

  handleDietaryDetailChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          dietaryRequirements: {
            ...prevState.person.dietaryRequirements,
            [name]: value
          }
        }
    }))
  }

  handleMedicalConditionsChange(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          medicalConditions: {
            ...prevState.person.medicalConditions,
            exists: !this.state.person.medicalConditions.exists,
            details: '',
            medications: ''
          }
        }
    }))
  }

  handleMedicalDetailsChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          medicalConditions: {
            ...prevState.person.medicalConditions,
             [name]: value
           }
        }
    }))
  }

  handleAllergyUpdate(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        allergies: {
          ...prevState.person.allergies,
          exists: !this.state.person.allergies.exists,
          details: ''
        }
      }
    }))
  }

  handleAllergyDetailsChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
          allergies: {
            ...prevState.person.allergies,
            [name]: value
          }
        }
    }))
  }

  handleSchoolChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        school: {
          ...prevState.person.school,
          [name]: value
        }
      }
    }))
  }

  handleRadioButtonChange(value, name){
    if(value === "true"){
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          [name]: true
        }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          [name]: false
        }
      }))
    }
  }

  handlePickUpChange(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        pickUp: {
          ...prevState.person.pickUp,
          toBeCollected: !this.state.person.pickUp.toBeCollected,
          byWho: ''
        }
      }
    }))
  }

  handlePickUpDetailsChange(value, name){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        pickUp: {
          ...prevState.person.pickUp,
          [name]: value
        }
      }
    }))
  }

  handleSiblingsChange(){
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        siblings: {
          ...prevState.person.siblings,
          exists: !this.state.person.siblings.exists,
          siblings: []
        }
      }
    }))
  }

  handleSiblingsAdded(value, name){
    const siblingsToAdd = value.split(",")
    this.setState(prevState => ({
      person: {
        ...prevState.person,
        siblings: {
        ...prevState.person.siblings,
        siblings: siblingsToAdd
        }
      }
    }))
  }

  handleEthnicityChange(value, name){
    if(value === "Other"){
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          ethnicity: ''
        }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          ethnicity: value
        }
      }))
    }
  }

  handleSignatureRadioButtonChange(value, name){
    if(value === "true"){
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          signed: {
            ...prevState.person.signed,
            signed: true
           }
         }
      }))
    } else {
      this.setState(prevState => ({
        person: {
          ...prevState.person,
          signed: {
            ...prevState.person.signed,
            signed: false
           }
          }
      }))
    }
  }

  toggleActivityForm = () => {
    this.setState((prevState) => ({
      displayActivityForm: !prevState.displayActivityForm
    }));

}
  addActivity(activity){
    const request = new ActivityRequest
    request.post(activity)
    const activities = [...this.state.activities, activity];
    this.setState({activities});
    this.setState({displayActivityForm: false})
  }

  updateActivity(id, activity){
    const request = new ActivityRequest
    request.edit(id, activity)
    // const tempActivities = this.state.activities
    // const index = tempActivities.indexOf(id);
    // tempActivities.splice(index, 1, activity);
    // this.setState({activities: tempActivities})
  }

  deleteActivity(id){
    const request = new ActivityRequest
    request.delete(id)
    const tempActivities = this.state.activities
    const index = tempActivities.indexOf(id);
    tempActivities.splice(index, 1);
    this.setState({activities: tempActivities})

  }

  addPerson(){
    const person = this.state.person
    const request = new PeopleRequest
    request.post(person)
    const people = [...this.state.people, person];
    this.setState({people});
    const resetPerson = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      primaryContact: '',
      secondaryContact: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
    siblings: {
      exists: false,
      siblings: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date:''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    }
    this.setState({person: resetPerson})
  }

  editPersonDetails(personToEdit){
    this.setState({person: personToEdit, edit: true})
  }

  handleEditPersonSubmit(){
    const updatedPerson = this.state.person
    this.updatePerson(updatedPerson)
    const resetPerson = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      primaryContact: '',
      secondaryContact: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
    siblings: {
      exists: false,
      siblings: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date:''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    }
    this.setState({person: resetPerson, edit: false})
  }

  updatePerson(updatedPerson){
    const request = new PeopleRequest
    request.edit(updatedPerson._id, updatedPerson)
    // const tempPeople = this.state.people
    // const index = this.state.people.indexOf(updatedPerson._id);
    // tempPeople.splice(index, 1, updatedPerson);
    // this.setState({people: tempPeople})
    }

    resetEditToFalse(){
      const resetPerson = {
        name: {
          firstName: '',
          lastName: ''
        },
        gender: '',
        dob: '',
        address: {
          address: '',
          postcode: ''
        },
        email: '',
        primaryContact: '',
        secondaryContact: '',
        emergencyContact: {
          name: '',
          relationship: '',
          number: ''
        },
        dietaryRequirements: {
          exists: false,
          details: ''
        },
        medicalConditions: {
          exists: false,
          details: '',
          medications: ''
        },
        allergies: {
          exists: false,
          details: ''
        },
        doctorsSurgery: '',
        community: '',
        school: {
          name: '',
          year: ''
        },
        photographyPermission: true,
        pickUp: {
          toBeCollected: false,
          byWho: ''
        },
      siblings: {
        exists: false,
        siblings: []
        },
        ethnicity: '',
        volunteering: true,
        signed: {
          signed: false,
          name: '',
          relationship: '',
          date:''
        },
        timeOut: {
          exists: false,
          reason: '',
          notes: ''
        }
      }
      this.setState({person: resetPerson, edit: false})
    }

  componentDidMount() {
    const url = 'http://localhost:8080/api/activities';
    fetch(url)
        .then(res => res.json())
        .then(activities => this.setState({
            activities: activities.data
        }))
        .catch(err => console.error);

    const url2 = 'http://localhost:8080/api/people';
    fetch(url2)
        .then(res => res.json())
        .then(people => this.setState({
            people: people.data
        }))
        .catch(err => console.error);
}

  renderMain(props) {
    return (
      <>
      <Button resetEditToFalse={this.resetEditToFalse}/>
      </>
    )
  }

  renderContact(props) {
    return (
      <ContactContainer
      people = {this.state.people}
      resetEditToFalse={this.resetEditToFalse}/>
    )
  }

  renderActivities(props) {
    return (
      <ActivityContainer
        activities={this.state.activities}
        addActivity={this.addActivity}
        displayActivityForm={this.state.displayActivityForm}
        toggleActivityForm={this.toggleActivityForm}
        deleteActivity={this.deleteActivity}
        updateActivity={this.updateActivity}
        resetEditToFalse={this.resetEditToFalse}
      />
    )
  }

  renderPeople(props) {
    return (

      <PersonContainer
      people={this.state.people}
      editPersonDetails={this.editPersonDetails}
      resetEditToFalse={this.resetEditToFalse}/>
    )
  }

  renderRestrictions(props) {
    return (
      <RestrictionsContainer
      people={this.state.people}
      updatePerson={this.updatePerson}
      resetEditToFalse={this.resetEditToFalse}/>
    )
  }

  renderRegistration(props) {
    return (
      <RegistrationContainer addPerson={this.addPerson}
      handleNewFormData={this.handleNewFormData}
      handleChange={this.handleChange}
      handleNameUpdate={this.handleNameUpdate}
      handleAddressUpdate={this.handleAddressUpdate}
      handleEmergencyContactChange={this.handleEmergencyContactChange}
      handleSignedChange={this.handleSignedChange}
      handleDietaryChange={this.handleDietaryChange}
      handleDietaryDetailChange={this.handleDietaryDetailChange}
      handleMedicalConditionsChange={this.handleMedicalConditionsChange}
      handleMedicalDetailsChange={this.handleMedicalDetailsChange}
      handleAllergyUpdate={this.handleAllergyUpdate}
      handleAllergyDetailsChange={this.handleAllergyDetailsChange}
      handleSchoolChange={this.handleSchoolChange}
      handleRadioButtonChange={this.handleRadioButtonChange}
      handlePickUpChange={this.handlePickUpChange}
      handlePickUpDetailsChange={this.handlePickUpDetailsChange}
      handleSiblingsAdded={this.handleSiblingsAdded}
      handleSiblingsChange={this.handleSiblingsChange}
      handleEthnicityChange={this.handleEthnicityChange}
      handleSignatureRadioButtonChange={this.handleSignatureRadioButtonChange}
      handleEditPersonSubmit={this.handleEditPersonSubmit}
      edit={this.state.edit}
      person={this.state.person}/>
    )
  }

  render(){
    return(
      <Router>
        <React.Fragment>
        <Header />

        <Route exact path="/" render={this.renderMain} />
        <Route exact path="/registration" render={this.renderRegistration} />
        <Route exact path="/restrictions" render={this.renderRestrictions} />
        <Route exact path="/contact" render={this.renderContact} />
        <Route exact path="/people" render={this.renderPeople} />
        <Route exact path="/activities" render={this.renderActivities} />

        </React.Fragment>

      </Router>

    )
  }
}

export default HomePageContainer
