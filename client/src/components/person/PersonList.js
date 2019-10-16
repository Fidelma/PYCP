import React from 'react'
import PersonListItem from './PersonListItem';

const PersonList = ({people}) => {
  const personNodes = people.map((person, index)=> {
    return (
      <PersonListItem person={person} key={index}/>
    )
  });
  return(
    <>
    {personNodes}
    </>
  )
}

export default PersonList;
