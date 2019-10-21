import React from 'react';
import './PersonListItem.css'
import {ReactComponent as CameraSvg} from '../../images/icons/camera.svg';
import {ReactComponent as BanSvg} from '../../images/icons/ban.svg';
import {ReactComponent as FirstAidSvg} from '../../images/icons/firstaid.svg';
import {ReactComponent as SquirrelSvg} from '../../images/icons/squirrel.svg';
import {ReactComponent as PickUpSvg} from '../../images/icons/useraltslash.svg';


const PersonListItem = ({person}) => {

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
    console.log("handleClick event Edit:")
  }

  const handlClickDetails = () => {
    console.log("handleClick event Details:")
  }

  return (
  <>
  <tr>
   <td>{person.name.firstName}</td>
   <td>{person.name.lastName}</td>
   <td>{person.school.year}</td>
   <td>
     <CameraIcon person={person}/>
     <MedicalIcon person={person}/>
     <AllergensIcon person={person}/>
     <PickUpIcon person={person}/>
     <BanIcon person={person}/>
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
     <button onClick={handlClickDetails} className="options">Details</button>
     <button onClick={handlClickEdit} className="options">Edit</button>
   </td>
   </tr>
  </>
)
}

export default PersonListItem
