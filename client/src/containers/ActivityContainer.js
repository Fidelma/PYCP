import React, {Component} from 'react';
import ActivityList from '../components/activity/ActivityList';
import ActivityForm from '../components/activity/ActivityForm';
import NewActivityButton from '../components/activity/NewActivityButton';
import NavBar from '../components/navigation/NavBar';

class ActivityContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
      activityToEdit: null
    }

    this.editActivity = this.editActivity.bind(this);

  }

editActivity(activity){
 this.setState({activityToEdit: activity, edit: !this.state.edit})
 this.props.toggleActivityForm();
}

  render(){
    return(
      <>
      <NavBar/>
      <h2>Activity Container</h2>
      <ActivityList
      activities={this.props.activities} deleteActivity={this.props.deleteActivity}
      editActivity={this.editActivity}
      />
      <NewActivityButton  toggleActivityForm={this.props.toggleActivityForm}/>
      <ActivityForm
      addActivity={this.props.addActivity}
      displayActivityForm={this.props.displayActivityForm}
      edit={this.state.edit}
      activityToEdit={this.state.activityToEdit}/>
      </>
    )
  }
}

export default ActivityContainer;
