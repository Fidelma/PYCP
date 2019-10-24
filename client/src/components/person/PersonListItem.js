import React from 'react';
import '../../styles/PersonListItem.css'
import {ReactComponent as CameraSvg} from '../../images/icons/camera.svg';
import {ReactComponent as BanSvg} from '../../images/icons/ban.svg';
import {ReactComponent as FirstAidSvg} from '../../images/icons/firstaid.svg';
import {ReactComponent as SquirrelSvg} from '../../images/icons/squirrel.svg';
<<<<<<< HEAD
import {ReactComponent as PickUpSvg} from '../../images/icons/useraltslash.svg';
import { Link } from 'react-router-dom';
=======
import {ReactComponent as PickUpSvg} from '../../images/icons/user-friends.svg';
>>>>>>> develop


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
  <tr>
<<<<<<< HEAD
   <td>{props.person.name.firstName}</td>
   <td>{props.person.name.lastName}</td>
   <td>{props.person.school.year}</td>
=======
   <td className="left-align">{person.name.firstName}</td>
   <td className="left-align">{person.name.lastName}</td>
   <td>{person.school.year}</td>
>>>>>>> develop
   <td>
     <CameraIcon person={props.person}/>
     <MedicalIcon person={props.person}/>
     <AllergensIcon person={props.person}/>
     <PickUpIcon person={props.person}/>
     <BanIcon person={props.person}/>
   </td>
   <td>
     <label className="container">Mon
       <input type="checkbox"/>
     </label>
     <label className="container">Tue
       <input type="checkbox"/>
     </label>
     <label className="container">Wed
       <input type="checkbox"/>
     </label>
     <label className="container">Thu
       <input type="checkbox"/>
     </label>
     <label className="container">Fri
       <input type="checkbox"/>
     </label>
     <label className="container">Sat
       <input type="checkbox"/>
     </label>
     <label className="container">Sun
       <input type="checkbox"/>
     </label>
   </td>
   <td>
<<<<<<< HEAD
     <button onClick={handlClickDetails} className="options">Details</button>

     <Link to='/registration'>
     <button onClick={handlClickEdit}
      className="options">Edit</button>
    </Link>

=======
     <button className="details-button" onClick={handlClickDetails} >Details</button>
     <button className="edit-button" onClick={handlClickEdit} >Edit</button>
>>>>>>> develop
   </td>
   </tr>
  </>
)
}

export default PersonListItem
