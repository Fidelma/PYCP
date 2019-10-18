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
  }

  componentDidMount() {
    const url = 'http://localhost:8080/activities';

    fetch(url)
        .then(res => res.json())
        .then(activities => this.setState({
            activities: activities
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
      <ActivityContainer activities={this.state.activities}/>
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
        <Route exact path="/activities" render={this.renderActivities} />
        </React.Fragment>
      </Router>





    )
  }
}

export default HomePageContainer
