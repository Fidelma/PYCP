import React, {Component} from 'react';
import ContactContainer from './ContactContainer';
import PersonContainer from './PersonContainer';
import ActivityContainer from './ActivityContainer';
import RegistrationContainer from './RegistrationContainer';
import NavBar from '../components/navigation/NavBar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class HomePageContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      activities: [],
      people: []

    }

    this.renderMain = this.renderMain.bind(this);
    this.renderContact = this.renderContact.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
    this.renderPeople = this.renderPeople.bind(this);
    this.addActivity = this.addActivity.bind(this);
  }

  addActivity(activity){
    const activities = [...this.state.activities, activity];
    this.setState({activities});
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
      <ActivityContainer
        activities={this.state.activities}
        addActivity={this.addActivity}
      />
    )
  }

  renderPeople(props) {
    return (
      <PersonContainer people={this.state.people}/>
    )
  }





  render(){
    return(
      <Router>
        <React.Fragment>
        <NavBar />
        <Route exact path="/" render={this.renderMain} />
        <Route exact path="/registration" component={RegistrationContainer} />
        <Route exact path="/contact" render={this.renderContact} />
        <Route exact path="/people" render={this.renderPeople} />
        <Route exact path="/activities" render={this.renderActivities} />
        </React.Fragment>
      </Router>





    )
  }
}

export default HomePageContainer
