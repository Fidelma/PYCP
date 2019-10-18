import React, {Component} from 'react';
import ActivityList from '../components/activity/ActivityList';
import ActivityForm from '../components/activity/ActivityForm';

class ActivityContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <h2>Activity Container</h2>
      <ActivityList activities={this.props.activities}/>
      <ActivityForm addActivity={this.props.addActivity}/>
      </>
    )
  }
}

export default ActivityContainer;
