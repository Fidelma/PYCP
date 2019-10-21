import React from 'react'
import ActivityListItem from './ActivityListItem';
import '../../styles/tables.css';

const ActivityList = ({activities}) => {
  const activityNodes = activities.map((activity, index)=> {
    return (
      <ActivityListItem activity={activity} key={index}/>
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
