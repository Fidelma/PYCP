import React, {Component} from 'react';

class Form extends Component {

render(){
  return(
    <>
      <h2>Registration Form</h2>

      <fieldset>
      <div>
        <label>First Name</label>
        <input type="text"/>

        <label>Last Name</label>
        <input type="text"/>

          <label>Gender</label>
          <select name="gender" id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

        <label>Date Of Birth</label>
        <input type="text"/>
      </div>
      </fieldset>


      <fieldset>

        <div>
          <h2>Address Details</h2>
          <label>Address</label>
          <input type="text"/>

          <label>Postcode</label>
          <input type="text"/>
        </div>

      </fieldset>

      <fieldset>
        <h2>Emergency Contact Details</h2>
        <label>Primary Contact Number</label>
        <input type="text"/>

        <label>Contact Number</label>
        <input type="text"/>

        <label>Secondary Contact Number</label>
        <input type="text"/>
      </fieldset>

      <fieldset>
        <label>Email</label>
        <input type="email"/>
      </fieldset>

      <fieldset>
      <h2>Dietary Details</h2>

      <label>Dietary Requirements</label>
      <select name="exists" id="exists">
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      <label>Details</label>
      <input type="text"/>

      <h2>Medical Details</h2>

      <label>Medical Conditions</label>
      <select name="exists" id="exists">
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      <label>Details</label>
      <input type="text"/>

      <label>Medications</label>
      <input type="text"/>

      <h2>Allergy Details</h2>

      <label>Allergies</label>
      <select name="exists" id="exists">
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>

      <label>Allergies</label>
      <input type="text"/>

      <label>Other</label>
      <input type="text"/>

      <label>Doctors Surgery</label>
      <select name="doctorsSurgery" id="doctorsSurgery">
        <option value="surgery1">Surgery1</option>
        <option value="surgery2">Surgery2</option>
      </select>

      </fieldset>

      <fieldset>
      <label>Community</label>
      <select name="community" id="community">
        <option value="West Pilton">West Pilton</option>
        <option value="Muirhouse">Muirhouse</option>
        <option value="West Granton">West Granton</option>
        <option value="Royston">Royston</option>
        <option value="Other">Other</option>
      </select>
      </fieldset>

      <fieldset>
      <h2>School Details</h2>
      <label>School</label>
      <select name="name" id="name">
        <option value="school1">School1</option>
        <option value="school2">School2</option>
      </select>

      <label>Year</label>
      <select name="year" id="year">
        <option value="p1">P1</option>
        <option value="p2">P2</option>
        <option value="p3">P3</option>
        <option value="p4">P4</option>
        <option value="p5">P5</option>
        <option value="p6">P6</option>
        <option value="p7">P7</option>
        <option value="s1">S1</option>
        <option value="s2">S2</option>
        <option value="s3">S3</option>
        <option value="s4">S4</option>

      </select>

      </fieldset>

      <fieldset>
        <label>Photograph Permission</label>
        <select name="photographPermission" id="photographPermission">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </fieldset>

      <fieldset>
        <label>Pickup</label>
        <select name="tobeCollected" id="tobeCollected">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <label>Collected By</label>
        <input type="text"/>
      </fieldset>

      <fieldset>
        <h2>Siblings</h2>
        <label>Siblings Registered?</label>
        <select name="exists" id="exists">
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>

        <label>Name</label>
        <select name="siblings" id="siblings">
          <option value="name">Child 1</option>
          <option value="name">Child 2</option>
          <option value="name">Child 3</option>
        </select>

      </fieldset>

      <fieldset>
        <label>Ethnicity</label>
        <select name="ethnicity" id="ethnicity">
          <option value="White Scottish">White Scottish</option>
          <option value="White British">White British</option>
          <option value="Black">Black</option>
          <option value="Asian">Asian</option>
          <option value="Polish">Polish</option>
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Other">Other</option>
        </select>
        <label>Other</label>
        <input type="text"/>

      </fieldset>

      <fieldset>
      <label>Volunteer?</label>
      <select name="volunteering" id="volunteering">
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      </fieldset>

      <fieldset>
      <label>Signed</label>
        <select name="signed" id="signed">
          <option value="false">No</option>
          <option value="true">Yes</option>
          </select>

        <label>Name</label>
        <input type="name"/>

        <label>Relationship</label>
        <input type="relationship"/>

        <label>Date</label>
        <input type="date"/>

      </fieldset>

      <fieldset>
      <label>Restrictions</label>
        <select name="restrictions" id="restrictions">
          <option value="false">No</option>
          <option value="true">Yes</option>
          </select>

      <label>Type</label>
          <select name="type" id="type">
            <option value="reason1">Reason1</option>
            <option value="reason2">Reason2</option>
            <option value="reason3">Reason3</option>
            <option value="reason4">Reason4</option>
          </select>

          <label>Notes</label>
          <input type="text"/>

      </fieldset>





      </>

  )
  }


  }

  export default Form;
