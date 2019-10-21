import React, {Component} from 'react';

const RestrictionsSearch = (props) => {
  const options = props.people.map((person, index) => {
    return <option value={index} key={index}>
      {person.name.firstName} {person.name.lastName}
    </option>
  })

  function handleChange(event) {
    console.log("this has changed")
    props.filterArray(event.target.value)
  }

    return(
      <>
        <select id="country-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a child...</option>
        {options}
        </select>
      </>
    )

}

export default RestrictionsSearch;
