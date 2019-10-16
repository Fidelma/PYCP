import React, {Component} from 'react';
import ActivityList from '../components/activity/ActivityList';


class ActivityContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <h2>Activity Container</h2>
      <ActivityList activities={this.props.activities}/>
      </>
    )
  }
}

export default ActivityContainer;
