import React from 'react'
import PersonListItem from './PersonListItem';
import './PersonList.css'

const PersonList = ({people}) => {
  const personNodes = people.map((person, index)=> {
    return (
      <PersonListItem person={person} key={index}/>
    )
  });
  return(
    <>
    <table className="people-table">
    <tr>
     <th>First Name</th>
     <th>Last Name</th>
     <th>School Year</th>
     <th>Information</th>
     <th>Attendance</th>
    </tr>
    {personNodes}
    </table>
    </>
  )
}

export default PersonList;
