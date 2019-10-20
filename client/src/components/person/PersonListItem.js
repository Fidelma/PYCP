import React from 'react';
import './PersonListItem.css'
import {ReactComponent as CameraSvg} from '../../images/icons/camera.svg';
import {ReactComponent as BanSvg} from '../../images/icons/ban.svg';
import {ReactComponent as FirstaidSvg} from '../../images/icons/firstaid.svg';
import {ReactComponent as SquirrelSvg} from '../../images/icons/squirrel.svg';


const PersonListItem = ({person}) => (
  <>
  <tr>
   <td>{person.name.firstName}</td>
   <td>{person.name.lastName}</td>
   <td>{person.school.year}</td>
   <td>
     <button>
       <CameraSvg className="icon"/>
     </button>
     <button>
       <BanSvg className="icon"/>
     </button>
     <button>
       <FirstaidSvg className="icon"/>
     </button>
     <button>
       <SquirrelSvg className="icon"/>
     </button>
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
   </tr>
  </>
)

export default PersonListItem
