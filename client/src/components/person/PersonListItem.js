import React from 'react'

const PersonListItem = ({person}) => (
  <>
   <h6>{person.name.firstName}</h6>
   <h6>{person.name.lastName}</h6>
  </>
)

export default PersonListItem
