import React from 'react';
import '../../styles/PersonListItem.css'
import '../../styles/buttons.css'
import '../../styles/tables.css'
import {ReactComponent as CameraSvg} from '../../images/icons/camera.svg';
import {ReactComponent as BanSvg} from '../../images/icons/ban.svg';
import {ReactComponent as FirstAidSvg} from '../../images/icons/firstaid.svg';
import {ReactComponent as SquirrelSvg} from '../../images/icons//squirrel.svg';
import {ReactComponent as PickUpSvg} from '../../images/icons/user-friends.svg';
import { Link } from 'react-router-dom';

const PersonListItem = (props) => {

  const CameraIcon = (props) => {
    if(!props.person.photographyPermission) {
      return <button className="icon"><CameraSvg/></button>
    }
    return <button className="icon"></button>
  }

  const MedicalIcon = (props) => {
    if(props.person.medicalConditions.exists) {
      return <button className="icon"><FirstAidSvg/></button>
    }
    return <button className="icon"></button>
  }

  const AllergensIcon = (props) => {
    if(props.person.allergies.exists) {
      return <button className="icon"><SquirrelSvg /></button>
    }
    return <button className="icon"></button>
  }

  const PickUpIcon = (props) => {
    if(props.person.pickUp.toBeCollected) {
      return <button className="icon"><PickUpSvg /></button>
    }
    return <button className="icon"></button>
  }

  const BanIcon = (props) => {
    if(props.person.timeOut.exists) {
      return <button className="icon"><BanSvg/></button>
    }
    return <button className="icon"></button>
  }


  const handlClickEdit = () => {
    console.log(props.person);
    props.editPersonDetails(props.person)
  }

  const handlClickDetails = () => {
    console.log("handleClick event Details:")
  }

  return (
  <>
<tr className="rowHover">
   <td>{props.person.name.firstName}</td>
   <td>{props.person.name.lastName}</td>
   <td>{props.person.school.year}</td>

   <td>
     <CameraIcon person={props.person}/>
     <MedicalIcon person={props.person}/>
     <AllergensIcon person={props.person}/>
     <PickUpIcon person={props.person}/>
     <BanIcon person={props.person}/>
   </td>
   <td>
      <div className="attendance"></div>
      <div className="attendance"></div>
      <div className="attendance"></div>
      <div className="attendance"></div>
      <div className="attendance"></div>
   </td>
   <td>

   <button onClick={handlClickDetails} className="details-button" id="detailsbtn">Details</button>

     <Link to='/registration'>
     <button onClick={handlClickEdit}
      className="edit-button" id="editbtn">Edit</button>
    </Link>


   </td>
   </tr>
  </>
)
}

export default PersonListItem


