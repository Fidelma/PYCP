import React, {Component} from 'react';

const RestrictionsList = ({person}) => {





    return(
      <>
      <tr>
        <td>{person.name.firstName}</td>
        <td>{person.name.lastName}</td>
        <td>{person.timeOut.startDate}</td>
        <td>{person.timeOut.endDate}</td>
        <td>{person.timeOut.reason}</td>
      </tr>
      </>
    )
}

export default RestrictionsList;
