import React, {Component} from 'react';
import ActivityList from '../components/activity/ActivityList';
import ActivityForm from '../components/activity/ActivityForm';
import NewActivityButton from '../components/activity/NewActivityButton';
import NavBar from '../components/navigation/NavBar';

class ActivityContainer extends Component {
  constructor(props){
    super(props);
  }



  render(){
    return(
      <>
      <NavBar/>
      <h2>Activity Container</h2>
      <ActivityList activities={this.props.activities}/>
      <NewActivityButton  toggleActivityForm={this.props.toggleActivityForm}/>
      <ActivityForm addActivity={this.props.addActivity}
      displayActivityForm={this.props.displayActivityForm}/>
      </>
    )
  }
}

export default ActivityContainer;
