import React from 'react'

const ContactListItem = ({person}) => (
  <>
   <h3>{person.name.firstName} {person.name.lastName}</h3>
  </>
)

export default ContactListItem
