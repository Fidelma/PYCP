import React from 'react'
import './ContactListItem.css'

const ContactListItem = ({person}) => {

  const handlClick = () => {

  }

  return (
    <>
      <tr>
       <td>{person.name.firstName}</td>
       <td>{person.name.lastName}</td>
       <td>{person.school.year}</td>
       <td>{person.primaryContact}</td>
       <td>{person.secondaryContact}</td>
       <td>{person.emergencyContact.name} {person.emergencyContact.number}</td>
       <td><button >All Details...</button></td>
      </tr>
    </>
  )
}

export default ContactListItem
