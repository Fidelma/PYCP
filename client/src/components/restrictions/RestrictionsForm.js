import React, {Component} from 'react';

class RestrictionsForm extends Component {

  render(){

    return(
      <>

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
}

export default RestrictionsForm;
