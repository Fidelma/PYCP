import React from 'react'
import '../../styles/ContactListItem.css'
import '../../styles/tables.css';

const ContactListItem = ({person}) => {



  return (
    <>
      <tr>
       <td className="left-align">{person.name.firstName}</td>
       <td className="left-align">{person.name.lastName}</td>
       <td>{person.school.year}</td>
       <td>{person.primaryContact}</td>
       <td>{person.secondaryContact}</td>
       <td>{person.emergencyContact.name} {person.emergencyContact.number}</td>
       <td>
       <button className="options">Details</button>
       <button className="options">Edit</button>
       </td>
      </tr>
    </>
  )
}

export default ContactListItem
