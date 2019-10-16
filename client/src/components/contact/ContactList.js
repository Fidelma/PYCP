import React from 'react'
import ContactListItem from './ContactListItem';

const ContactList = ({people}) => {
  const personNodes = people.map((person, index)=> {
    return (
      <>
      <ContactListItem person={person} key={index}/>
      <PersonListItem person={person} key={index}/>
      </>
    )
  });
  return(
    <>
    {personNodes}
    </>
  )
}

export default ContactList;
