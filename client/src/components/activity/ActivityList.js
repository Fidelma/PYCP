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
    <table align="center">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Age Groups</th>
          <th>Times</th>
          <th>Day</th>
          <th></th>
          <th></th>
        </tr>

    {activityNodes}
    </tbody>
</table>
    </>
  )
}

export default ActivityList;
