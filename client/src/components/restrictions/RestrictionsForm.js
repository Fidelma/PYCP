import React, {Component} from 'react';

class RestrictionsForm extends Component {

render(){
  return(
    <>
      <h2>Restrictions Input</h2>

      <fieldset>
        <div>
          <label>Start Date</label>
          <input type="date"/>

          <label>End Date</label>
          <input type="date"/>
        </div>
        <div>
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
