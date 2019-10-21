import React, {Component} from 'react';

const RestrictionsForm = (props) => {

function handleSubmit(event){
  event.preventDefault();
   const timeOut = {
     "exists": true,
     "reason": event.target.reason.value,
     "notes": event.target.notes.value
   }
   console.log(timeOut);
   props.handleRestrictionPost(timeOut);
}

    return(
      <>
        <h2>Restrictions Input</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Child Name:</h4>
          </div>
          <div>
            <h4>Input restriction date range</h4>
            <label>Start Date:</label>
            <input type="date" name="startDate"/>

            <label>End Date:</label>
            <input type="date" name="endDate"/>
          </div>
          <div>
            <h4>Input restriction details</h4>
            <label>Reason:</label>
            <input type="text" size="100" name="reason"/>
            <br/>
            <label>Notes:</label>
            <input type="text" size="100" name="notes"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </>
    )

}

export default RestrictionsForm;
