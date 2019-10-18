import React from 'react'

const ContactListItem = ({person}) => (
  <>
    <tr>
     <td>{person.name.firstName}</td>
     <td>{person.name.lastName}</td>
     <td>{person.school.year}</td>
     <td>{person.primaryContact}</td>
     <td>{person.secondaryContact}</td>
     <td>{person.emergencyContact.name} {person.emergencyContact.number}</td>
    </tr>
  </>
)

export default ContactListItem
