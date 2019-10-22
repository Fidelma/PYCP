import React from 'react'

const ActivityListItem = (props) => {

  function handleDelete(){
    props.deleteActivity(props.activity._id)
  }



  return(
  <>

    <tr>
     <td>{props.activity.title}</td>
     <td>{props.activity.age.join(', ')}</td>
     <td>{props.activity.startTime} - {props.activity.endTime}</td>
     <td>{props.activity.day}</td>
     <td><button>Edit Activity</button></td>
     <td><button onClick={handleDelete}>Delete Activity</button></td>
    </tr>

  </>

)

}
export default ActivityListItem
