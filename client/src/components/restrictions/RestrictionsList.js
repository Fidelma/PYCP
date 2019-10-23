import React, {Component} from 'react';

const RestrictionsList = ({person}) => {

  const RestrictionList = (props) => {
    if(props.person.timeOut.exists) {
      if(props.person.timeOut.endDate) {
      const startDate = props.person.timeOut.startDate;
      let startDateReduced = startDate.slice(0,10);
      const endDate = props.person.timeOut.endDate;
      let endDateReduced = endDate.slice(0,10);
      return <tr><td>{props.person.name.firstName}</td><td>{props.person.name.lastName}</td><td>{startDateReduced}</td><td>{endDateReduced}</td><td>{props.person.timeOut.reason}</td></tr>
      }
    }
    return null
  }

    return(
      <>
        <RestrictionList person={person}/>
      </>
    )
}

export default RestrictionsList;


//MOMENT.JS