import React from 'react'
import ActivityListItem from './ActivityListItem';
import '../../styles/tables.css';

const ActivityList = (props) => {
  const activityNodes = props.activities.map((activity, index)=> {
    return (
      <ActivityListItem
      deleteActivity={props.deleteActivity} editActivity={props.editActivity}
      activity={activity} key={index}/>

    )
  });
  return(
    <>
    <table className="table">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Age Groups</th>
          <th>Times</th>
          <th>Day</th>
          <th>Edit Activity</th>
          <th>Delete Activity</th>
        </tr>

    {activityNodes}
    </tbody>
</table>
    </>
  )
}

export default ActivityList;
