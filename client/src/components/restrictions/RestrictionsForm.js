import React, {Component} from 'react';

const RestrictionsForm = (props) => {
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
        <select id="country-selector" defaultValue="default"     onChange={handleChange}>
        <option disabled value="default">Choose a child...</option>
        {options}
        </select>

        <h2>Restrictions Input</h2>
        <fieldset>
          <div>
            <h4>Child Name:</h4>
            <label>Name</label>
            <input type="text"/>
          </div>
          <div>
            <h4>Input restriction date range</h4>
            <label>Start Date</label>
            <input type="date"/>

            <label>End Date</label>
            <input type="date"/>
          </div>
          <div>
            <h4>Input restriction details</h4>
            <label>Reason</label>
            <input type="text" size="100"/>
            <br/>
            <label>Notes</label>
            <input type="text" size="100"/>
          </div>
        </fieldset>
      </>
    )

}

export default RestrictionsForm;
