import React from 'react'

const ActivityListItem = ({activity}) => (
  <>

    <tr>
     <td>{activity.title}</td>
     <td>{activity.age.join(', ')}</td>
     <td>{activity.startTime} - {activity.endTime}</td>
     <td>{activity.day}</td>
     <td><button>Edit Activity</button></td>
     <td><button>Delete Activity</button></td>
    </tr>

  </>

)

export default ActivityListItem
