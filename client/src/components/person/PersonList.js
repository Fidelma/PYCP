import React from 'react'
import PersonListItem from './PersonListItem';
import '../../styles/tables.css';

const PersonList = ({people}) => {
  const personNodes = people.map((person, index)=> {
    return (
      <PersonListItem person={person} key={index}/>
    )
  });
  return(
    <>
    <table>
      <tbody>
      {personNodes}
      </tbody>
    </table>
    </>
  )
}

export default PersonList;


// <tr>
//  <th>First Name</th>
//  <th>Last Name</th>
//  <th>School Year</th>
//  <th>Information</th>
//  <th>Attendance</th>
//  <th>Options</th>
// </tr>
