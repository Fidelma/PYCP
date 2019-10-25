import React from 'react'
import '../../styles/buttons.css';
import '../../styles/tables.css';

const ActivityListItem = (props) => {

  function handleDelete(){
    props.deleteActivity(props.activity._id)
  }

  function handleEdit(){
    props.editActivity(props.activity)
  }



  return(
  <>
    <tr>
     <td>{props.activity.title}</td>
     <td>{props.activity.age.join(', ')}</td>
     <td>{props.activity.startTime} - {props.activity.endTime}</td>
     <td>{props.activity.day}</td>
     <td><button className="edit-button" onClick={handleEdit}>Edit Activity</button></td>
     <td><button className="delete-button" onClick={handleDelete}>Delete Activity</button></td>
    </tr>
  </>

)

}
export default ActivityListItem
