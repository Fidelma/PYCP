import React, {Component} from 'react';

const RestrictionsForm = (props) => {

function handleSubmit(event){
  event.preventDefault();
   const timeOut = {
     "exists": true,
     "startDate": event.target.startDate.value,
     "endDate": event.target.endDate.value,
     "reason": event.target.reason.value,
     "notes": event.target.notes.value
   }
   props.handleRestrictionPost(timeOut);
}

return(
  <>
  <fieldset>
    <form onSubmit={handleSubmit}>
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
    </fieldset>
  </>
)

}

export default RestrictionsForm;
