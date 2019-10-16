import React, {Component} from 'react';

class ActivityForm extends Component {

render(){
  return(
  <form>
  <fieldset>
    <fieldset>
    <div>
      <label>Activity Title</label>
      <input type="text"/>
    </div>
    </fieldset>

    <fieldset>
    <div>
      <label>Day</label>
      <select name="day" id="day">
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>

    <div>
      <label>Start Time</label>
      <input type="time"/>
    </div>

    <div>
      <label>End Time</label>
      <input type="time" step="0:10:00"/>
    </div>
    </fieldset>

    <fieldset>
      <div>
        <label>Age Group</label>
        <input type="checkbox" name="" value="P1"/>P1
        <input type="checkbox" name="" value="P2"/>P2
        <input type="checkbox" name="" value="P3"/>P3
        <input type="checkbox" name="" value="P4"/>P4
        <input type="checkbox" name="" value="P5"/>P5
        <input type="checkbox" name="" value="P6"/>P6
        <input type="checkbox" name="" value="P7"/>P7
        <input type="checkbox" name="" value="S1"/>S1
        <input type="checkbox" name="" value="S2"/>S2
        <input type="checkbox" name="" value="S3"/>S3
        <input type="checkbox" name="" value="S4"/>S4
      </div>

    <div>
      <label>Gender</label>
      <select name="gender" id="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both</option>

      </select>
    </div>

    <div>
      <label>Location</label>
      <input type="text"/>
    </div>

    <div>
      <label>Description</label>
      <input type="textarea"/>
    </div>

    <div>
      <button type="submit">SUBMIT!</button>
    </div>

    </fieldset>
    </fieldset>
  </form>
)
}


}

export default ActivityForm;
