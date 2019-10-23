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
      displayForm: false

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
    this.displayRegistrationForm = this.displayRegistrationForm.bind(this);
    this.displayRegisterList = this.displayRegisterList.bind(this);
  }

  toggleActivityForm = () => {
    this.setState((prevState) => ({
      displayActivityForm: !prevState.displayActivityForm
    }));
}

  displayRegistrationForm(){
    this.setState({displayForm: true})
  }

  displayRegisterList(){
    this.setState({displayForm: false})
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
    const tempActivities = this.state.activities
    const index = tempActivities.indexOf(id);
    tempActivities.splice(index, 1, activity);
    this.setState({activities: tempActivities})
  }

  deleteActivity(id){
    const request = new ActivityRequest
    request.delete(id)
    const tempActivities = this.state.activities
    const index = tempActivities.indexOf(id);
    tempActivities.splice(index, 1);
    this.setState({activities: tempActivities})

  }

  addPerson(person){
    const people = [...this.state.people, person];
    this.setState({people});
  }

  updatePerson(person){
    const request = new PeopleRequest
    request.edit(person._id, person)

    const tempPeople = this.state.people
    const index = tempPeople.indexOf(person._id);
    tempPeople.splice(index, 1, person);
    this.setState({people: tempPeople})
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
      <Button
      displayRegistrationForm={this.displayRegistrationForm}
      displayRegisterList={this.displayRegisterList}/>
      </>
    )
  }

  renderContact(props) {
    return (
      <ContactContainer
      people = {this.state.people}
      displayRegistrationForm={this.displayRegistrationForm}
      displayRegisterList={this.displayRegisterList}/>
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
        displayRegistrationForm={this.displayRegistrationForm}
        displayRegisterList={this.displayRegisterList}
      />
    )
  }

  renderPeople(props) {
    return (

      <PersonContainer
      people={this.state.people}
      displayForm={this.state.displayForm}
      displayRegistrationForm={this.displayRegistrationForm}
      displayRegisterList={this.displayRegisterList}/>
    )
  }

  renderRestrictions(props) {
    return (
      <RestrictionsContainer
      people={this.state.people}
      updatePerson={this.updatePerson}
      displayRegistrationForm={this.displayRegistrationForm}
      displayRegisterList={this.displayRegisterList}/>
    )
  }

  renderRegistration(props) {
    return (
      <RegistrationContainer addPerson={this.addPerson}
      displayRegistrationForm={this.displayRegistrationForm}
      displayRegisterList={this.displayRegisterList}/>
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
