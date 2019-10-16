import React from 'react'
import ActivityListItem from './ActivityListItem';

const ActivityList = ({activities}) => {
  const activityNodes = activities.map((activity, index)=> {
    return (
      <ActivityListItem activity={activity} key={index}/>
    )
  });
  return(
    <>
    {activityNodes}
    </>
  )
}

export default ActivityList;
