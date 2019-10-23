import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    //allows state to be reset on form submission

    this.handleChange = this.handleChange.bind(this);
    this.handleNameUpdate = this.handleNameUpdate.bind(this);
    this.handleAddressUpdate = this.handleAddressUpdate.bind(this);
    this.handleEmergencyContactChange = this.handleEmergencyContactChange.bind(this);
    this.handleSignedChange = this.handleSignedChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
    this.handleDietaryChange = this.handleDietaryChange.bind(this);
    this.toggleExtraDetails = this.toggleExtraDetails.bind(this);
    this.handleDietaryDetailChange = this.handleDietaryDetailChange.bind(this);
    this.handleMedicalConditionsChange = this.handleMedicalConditionsChange.bind(this);
    this.handleMedicalDetailsChange = this.handleMedicalDetailsChange.bind(this);
    this.handleAllergyUpdate = this.handleAllergyUpdate.bind(this);
    this.handleAllergyDetailsChange = this.handleAllergyDetailsChange.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    this.handlePickUpChange = this.handlePickUpChange.bind(this);
    this.handlePickUpDetailsChange = this.handlePickUpDetailsChange.bind(this);
    this.handleSiblingsChange = this.handleSiblingsChange.bind(this);
    this.handleSiblingsAdded = this.handleSiblingsAdded.bind(this);
    this.handleEthnicityChange = this.handleEthnicityChange.bind(this);
    this.handleSignatureRadioButtonChange = this.handleSignatureRadioButtonChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange({ target: { value, name } }) {
    this.props.handleChange(value, name)
  }

  handleNameUpdate({target: { value, name } }) {
    this.props.handleNameUpdate(value, name)
  }

  handleAddressUpdate({target: { value, name } }){
   this.props.handleAddressUpdate(value, name)
  }

  handleEmergencyContactChange({target: { value, name }}){
    this.props.handleEmergencyContactChange(value, name)
  }

  handleSignedChange({target: {value, name}}){
    this.props.handleSignedChange(value, name)
  }

  handleDietaryChange({target: {name}}){
    this.props.handleDietaryChange()
    this.toggleExtraDetails(name)
  }

  toggleExtraDetails(name){
    const x = document.getElementById(name);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  handleDietaryDetailChange({target: {value, name}}){
    this.props.handleDietaryDetailChange(value, name)
  }

  handleMedicalConditionsChange({target: {name}}){
    this.props.handleMedicalConditionsChange()
    this.toggleExtraDetails(name)
  }

  handleMedicalDetailsChange({target: {value, name}}){
    this.props.handleMedicalDetailsChange(value, name)
  }

  handleAllergyUpdate({target: {name}}){
    this.props.handleAllergyUpdate()
    this.toggleExtraDetails(name)
  }

  handleAllergyDetailsChange({target: {value, name}}){
    this.props.handleAllergyDetailsChange(value, name)
  }

  handleSchoolChange({target: {value, name}}){
    this.props.handleSchoolChange(value, name)
  }

  handleRadioButtonChange({target: {value, name}}){
    this.props.handleRadioButtonChange(value, name)
  }

  handlePickUpChange({target: {name}}){
    this.props.handlePickUpChange()
    this.toggleExtraDetails(name)
  }

  handlePickUpDetailsChange({target: {value, name}}){
    this.props.handlePickUpDetailsChange(value, name)
  }

  handleSiblingsChange({target: {name}}){
    this.props.handleSiblingsChange()
    this.toggleExtraDetails(name)
  }

  handleSiblingsAdded({target: {value, name}}){
    this.props.handleSiblingsAdded(value, name)
  }

  handleEthnicityChange({target: {value, name}}){
    this.props.handleEthnicityChange(value, name)
    if(value === "Other"){
      this.toggleExtraDetails(name)
    }
  }

  handleSignatureRadioButtonChange({target: {value, name}}){
     this.props.handleSignatureRadioButtonChange(value, name)
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addPerson()
  }



render(){
  return(
    <>
    <form>
      <h2>Registration Form</h2>

      <fieldset>

      <div>

        <h4>Child or Youth's details</h4>

        <label>First Name</label>
        <input
        type="text" id="firstName" name="firstName"
        value={this.props.person.name.firstName}
        onChange={this.handleNameUpdate}/>

        <label>Last Name</label>
        <input
        type="text"
        id="lastName"
        name="lastName"
        // primaryKey="name"
        value={this.props.person.name.lastName}
        onChange={this.handleNameUpdate}
        />

        <label>Gender</label>
        <select name="gender" id="gender" onChange={this.handleChange}>
        <option
        disabled selected value> - select an option - </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        </select>

        <label>Date Of Birth</label>
        <input
        type="date"
        name="dob"
        id="dob"
        value={this.props.person.dob}
        onChange={this.handleChange}/>

      </div>

      </fieldset>

      <fieldset>

      <h4>Guardian Contact Details</h4>

      <label>Name</label>
      <input
      type="name"
      name="name"
      id="name"
      value={this.props.person.signed.name}
      onChange={this.handleSignedChange}
      />

      <label>Relationship</label>
      <input
      type="relationship"
      name="relationship"
      id="relationship"
      value={this.props.person.signed.relationship}
      onChange={this.handleSignedChange}
      />

        <label>Primary Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="primaryContact"
        id="primaryContact"
        value={this.props.person.primaryContact}
        onChange={this.handleChange}/>


        <label>Secondary Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="secondaryContact"
        id="secondaryContact"
        value={this.props.person.secondaryContact}
        onChange={this.handleChange}/>

        <div>
          <label>Address</label>
          <input
          type="text"
          name="address"
          id="address"
          value={this.props.person.address.address}
          onChange={this.handleAddressUpdate}/>

          <label>Postcode</label>
          <input
          type="text"
          name="postcode"
          id="postcode"
          value={this.props.person.address.postcode}
          onChange={this.handleAddressUpdate}
          />
        </div>

        <div>
        <label>Email</label>
        <input
        type="email"
        name="email"
        id="email"
        value={this.props.person.email}
        onChange={this.handleChange}/>
        </div>


      </fieldset>

      <fieldset>

      <h4>Emergency Contact Details</h4>

      <label>Name</label>
      <input
      type="name"
      name="name"
      id="name"
      value={this.props.person.emergencyContact.name}
      onChange={this.handleEmergencyContactChange}
      />

      <label>Relationship</label>
      <input
      type="relationship"
      name="relationship"
      id="relationship"
      value={this.props.person.emergencyContact.relationship}
      onChange={this.handleEmergencyContactChange}
      />

        <label>Emergency Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="number"
        id="number"
        value={this.props.person.emergencyContact.number}
        onChange={this.handleEmergencyContactChange}/>


      </fieldset>



      <fieldset>
      <h4>Dietary Details</h4>

      <label>Dietary Requirements</label>
      <input
      type="checkbox"
      name="dietaryDetails"
      value={this.props.person.dietaryRequirements.exists}
      onChange={this.handleDietaryChange}/>

      <div id="dietaryDetails" style={{display: "none"}}>
      <label>Details</label>
      <input
      type="text"
      name="details"
      value={this.props.person.dietaryRequirements.details}
      onChange={this.handleDietaryDetailChange}/>
      </div>

      <h4>Medical Details</h4>

      <label>Doctors Surgery</label>
      <select
      name="doctorsSurgery"
      id="doctorsSurgery"
      onChange={this.handleChange}>
      <option
      disabled selected value> - select an option - </option>
        <option value="surgery1">Surgery1</option>
        <option value="surgery2">Surgery2</option>
      </select>

      <label>Medical Conditions</label>
      <input
      type="checkbox"
      name="medicalDetails"
      value={this.props.person.medicalConditions.exists}
      onChange={this.handleMedicalConditionsChange}/>

      <div id="medicalDetails" style={{display: "none"}}>
      <label>Details</label>
      <input
      type="text"
      name="details"
      value={this.props.person.medicalConditions.details}
      onChange={this.handleMedicalDetailsChange}/>

      <label>Medications</label>
      <input
      type="text"
      name="medications"
      value={this.props.person.medicalConditions.medications}
      onChange={this.handleMedicalDetailsChange}/>
      </div>

      <h4>Allergy Details</h4>

      <label>Allergies</label>
      <input
      type="checkbox"
      name="allergyDetails"
      value={this.props.person.allergies.exists}
      onChange={this.handleAllergyUpdate}/>


      <div id="allergyDetails" style={{display: "none"}}>
        <label>Details</label>
        <input
        type="text"
        name="details"
        value={this.props.person.allergies.details}
        onChange={this.handleAllergyDetailsChange}
        />
      </div>

      </fieldset>

      <fieldset>
      <label>Community</label>
      <select
      name="community"
      id="community"
      onChange={this.handleChange}>
        <option
        disabled selected value> - select an option - </option>
        <option value="West Pilton">West Pilton</option>
        <option value="Muirhouse">Muirhouse</option>
        <option value="West Granton">West Granton</option>
        <option value="Royston">Royston</option>
        <option value="Other">Other</option>
      </select>

      <label>School</label>
      <select
      name="name"
      id="name"
      onChange={this.handleSchoolChange}>
        <option
        disabled selected value> - select an option - </option>
        <option value="school1">School1</option>
        <option value="school2">School2</option>
      </select>

      <label>Year</label>
      <select
      name="year"
      id="year"
      onChange={this.handleSchoolChange}>
        <option
        disabled selected value> - select an option - </option>
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
        <label>Photograph Permission:</label>
        <label>
        <input
        type="radio"
        name="photographyPermission"
        value="true"
        checked={this.props.person.photographyPermission === true}
        onChange={this.handleRadioButtonChange}/>Yes
        </label>
        <label>
        <input
        type="radio"
        name="photographyPermission"
        value="false"
        checked={this.props.person.photographyPermission === false}
        onChange={this.handleRadioButtonChange}/>No
        </label>

      </fieldset>

      <fieldset>
        <label>To be collected ? </label>
        <input
        type="checkbox"
        name="collectionDetails"
        value={this.props.person.pickUp.toBeCollected}
        onChange={this.handlePickUpChange}/>

        <div id="collectionDetails" style={{display: "none"}}>
        <label>Collected By</label>
        <input
        type="text"
        name="byWho"
        value={this.props.person.pickUp.byWho}
        onChange={this.handlePickUpDetailsChange}
        />
        </div>

      </fieldset>

      <fieldset>
        <h4>Siblings</h4>
        <label>Siblings Registered?</label>
        <input
        type="checkbox"
        name="siblingdetails"
        value={this.props.person.siblings.exists}
        onChange={this.handleSiblingsChange}/>

        <div id="siblingdetails" style={{display: "none"}}>
        <label>Name</label>
        <input
        type="text"
        name="siblings"
        value={this.props.person.siblings.siblings}
        onChange={this.handleSiblingsAdded}/>
        </div>

      </fieldset>

      <fieldset>
        <label>Ethnicity</label>
        <select
        name="ethnicityOther"
        id="ethnicity"
        onChange={this.handleEthnicityChange}>
          <option
          disabled selected value> - select an option - </option>
          <option value="White Scottish">White Scottish</option>
          <option value="White British">White British</option>
          <option value="Black">Black</option>
          <option value="Asian">Asian</option>
          <option value="Polish">Polish</option>
          <option value="Prefer not to say">Prefer not to say</option>
          <option value="Other">Other</option>
        </select>

        <div id="ethnicityOther" style={{display: "none"}}>
        <label>Other</label>
        <input
        type="text"
        name="ethnicity"
        value={this.props.person.ethnicity}
        onChange={this.handleChange}/>
        </div>

      </fieldset>

      <fieldset>
      <label>Volunteer:</label>
      <label>
      <input
      type="radio"
      name="volunteering"
      value="true"
      checked={this.props.person.volunteering === true}
      onChange={this.handleRadioButtonChange}/>Yes
      </label>
      <label>
      <input
      type="radio"
      name="volunteering"
      value="false"
      checked={this.props.person.volunteering === false}
      onChange={this.handleRadioButtonChange}/>No
      </label>
      </fieldset>

      <fieldset>

          <label>Signed:</label>
          <label>
          <input
          type="radio"
          name="signed"
          value="true"
          checked={this.props.person.signed.signed === true}
          onChange={this.handleSignatureRadioButtonChange}/>Yes
          </label>
          <label>
          <input
          type="radio"
          name="signed"
          value="false"
          checked={this.props.person.signed.signed === false}
          onChange={this.handleSignatureRadioButtonChange}/>No
          </label>

        <label>Date</label>
        <input
        type="date"
        name="date"
        value={this.props.person.signed.date}
        onChange={this.handleSignedChange}/>

        </fieldset>

        <fieldset>

        <button type="submit" onClick={this.handleSubmit}>Add new participant</button>

        </fieldset>
        </form>

      </>

  )
  }


  }

  export default Form;
