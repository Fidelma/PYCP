import React, {Component} from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';
import ActivityContainer from './ActivityContainer';
import RegistrationContainer from './RegistrationContainer';
import RestrictionsContainer from './RestrictionsContainer';
import NavBar from '../components/navigation/NavBar';
import Header from '../components/home/Header';
import Button from '../components/home/Button';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class HomePageContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      activities: [],
      people: [],
      displayActivityForm: false

    }

    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderPeople = this.renderPeople.bind(this);
    this.addActivity = this.addActivity.bind(this);
    this.renderRestrictions = this.renderRestrictions.bind(this);
  }

  toggleActivityForm = () => {
    this.setState((prevState) => ({
      displayActivityForm: !prevState.displayActivityForm
    }));

}
  addActivity(activity){
    const activities = [...this.state.activities, activity];
    this.setState({activities});
    this.setState({displayActivityForm: false})
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
      <h1>HomePageContainer</h1>
      <Button/>
      </>
    )
  }

  renderContact(props) {
    return (
      <ContactContainer people = {this.state.people}/>
    )
  }

  renderActivities(props) {
    return (
      <ActivityContainer
        activities={this.state.activities}
        addActivity={this.addActivity}
        displayActivityForm={this.state.displayActivityForm}
        toggleActivityForm={this.toggleActivityForm}
      />
    )
  }

  renderPeople(props) {
    return (

      <PersonContainer people={this.state.people}/>
    )
  }

  renderRestrictions(props) {
    return (
      <RestrictionsContainer people={this.state.people}/>
    )
  }

  render(){
    return(
      <Router>
        <React.Fragment>
        <Header />

        <Route exact path="/" render={this.renderMain} />
        <Route exact path="/registration" component={RegistrationContainer} />
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
