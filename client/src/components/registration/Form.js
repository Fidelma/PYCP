import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: {
        firstName: '',
        lastName: ''
      },
      gender: '',
      dob: '',
      address: {
        address: '',
        postcode: ''
      },
      email: '',
      primaryContact: '',
      secondaryContact: '',
      emergencyContact: {
        name: '',
        relationship: '',
        number: ''
      },
      dietaryRequirements: {
        exists: false,
        details: ''
      },
      medicalConditions: {
        exists: false,
        details: '',
        medications: ''
      },
      allergies: {
        exists: false,
        details: ''
      },
      doctorsSurgery: '',
      community: '',
      school: {
        name: '',
        year: ''
      },
      photographyPermission: true,
      pickUp: {
        toBeCollected: false,
        byWho: ''
      },
    siblings: {
      exists: false,
      siblings: []
      },
      ethnicity: '',
      volunteering: true,
      signed: {
        signed: false,
        name: '',
        relationship: '',
        date:''
      },
      timeOut: {
        exists: false,
        reason: '',
        notes: ''
      }
    };
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
    this.handleEthinicityChange = this.handleEthinicityChange.bind(this);
    this.handleSignatureRadioButtonChange = this.handleSignatureRadioButtonChange.bind(this);
  }


  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  handleNameUpdate({target: { value, name } }) {
    this.setState(prevState => ({
      name: {
        ...prevState.name,
        [name]: value
      }
    }))
  }

  handleAddressUpdate({target: { value, name } }){
    this.setState(prevState => ({
      address: {
        ...prevState.address,
        [name]: value
      }
    }))
  }

  handleEmergencyContactChange({target: { value, name }}){
    this.setState(prevState => ({
      emergencyContact: {
        ...prevState.emergencyContact,
        [name]: value
      }
    }))
  }

  handleSignedChange({target: {value, name}}){
    this.setState(prevState => ({
      signed: {
        ...prevState.signed,
        [name]: value
      }
    }))
  }

  handleDietaryChange({target: {name}}){
    this.setState(prevState => ({
      dietaryRequirements: {
        ...prevState.dietaryRequirements,
        exists: !this.state.dietaryRequirements.exists,
        details: ''
      }
    }))
    this.toggleExtraDetails(name)
  }

  toggleExtraDetails(name){
    const x = document.getElementById(name);
    if (x.style.display == "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  handleDietaryDetailChange({target: {value, name}}){
    this.setState(prevState => ({
      dietaryRequirements: {
        ...prevState.dietaryRequirements,
        [name]: value
      }
    }))
  }

  handleMedicalConditionsChange({target: {name}}){
    this.setState(prevState => ({
      medicalConditions: {
        ...prevState.medicalConditions,
        exists: !this.state.medicalConditions.exists,
        details: '',
        medications: ''
      }
    }))
    this.toggleExtraDetails(name)
  }

  handleMedicalDetailsChange({target: {value, name}}){
    this.setState(prevState => ({
      medicalConditions: {
        ...prevState.medicalConditions,
        [name]: value
      }
    }))
  }

  handleAllergyUpdate({target: {name}}){
    this.setState(prevState => ({
      allergies: {
        ...prevState.allergies,
        exists: !this.state.allergies.exists,
        details: ''
      }
    }))
    this.toggleExtraDetails(name)
  }

  handleAllergyDetailsChange({target: {value, name}}){
    this.setState(prevState => ({
      allergies: {
        ...prevState.allergies,
        [name]: value
      }
    }))
  }

  handleSchoolChange({target: {value, name}}){
    this.setState(prevState => ({
      school: {
        ...prevState.school,
        [name]: value
      }
    }))
  }

  handleRadioButtonChange({target: {value, name}}){
    if(value == "true"){
      this.setState({[name]: true})
    } else {
      this.setState({[name]: false})
    }
  }

  handlePickUpChange({target: {name}}){
    this.setState(prevState => ({
      pickUp: {
        ...prevState.pickUp,
        toBeCollected: !this.state.pickUp.toBeCollected,
        byWho: ''
      }
    }))
    this.toggleExtraDetails(name)
  }

  handlePickUpDetailsChange({target: {value, name}}){
    this.setState(prevState => ({
      pickUp: {
        ...prevState.pickUp,
        [name]: value
      }
    }))
  }

  handleSiblingsChange({target: {name}}){
    this.setState(prevState => ({
      siblings: {
        ...prevState.siblings,
        exists: !this.state.siblings.exists,
        siblings: []
      }
    }))
    this.toggleExtraDetails(name)
  }

  handleSiblingsAdded({target: {value, name}}){
    const siblingsToAdd = value.split(",")
    this.setState(prevState => ({
      siblings: {
        ...prevState.siblings,
        siblings: siblingsToAdd
      }
    }))
  }

  handleEthinicityChange({target: {value, name}}){
    if(value === "Other"){
      this.setState({ethinicty: ''})
      this.toggleExtraDetails(name)
    } else {
      this.setState({ethnicity: value})
    }
  }

  handleSignatureRadioButtonChange({target: {value, name}}){
    if(value == "true"){
      this.setState(prevState => ({
        signed: {
          ...prevState.signed,
          signed: true
        }
      }))
    } else {
      this.setState(prevState => ({
        signed: {
          ...prevState.signed,
          signed: false
        }
      }))
    }
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
        value={this.state.firstName}
        onChange={this.handleNameUpdate}/>

        <label>Last Name</label>
        <input
        type="text"
        id="lastName"
        name="lastName"
        // primaryKey="name"
        value={this.state.lastName}
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
        value={this.state.dob}
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
      value={this.state.signed.name}
      onChange={this.handleSignedChange}
      />

      <label>Relationship</label>
      <input
      type="relationship"
      name="relationship"
      id="relationship"
      value={this.state.signed.relationship}
      onChange={this.handleSignedChange}
      />

        <label>Primary Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="primaryContact"
        id="primaryContact"
        value={this.state.primaryContact}
        onChange={this.handleChange}/>


        <label>Secondary Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="secondaryContact"
        id="secondaryContact"
        value={this.state.secondaryContact}
        onChange={this.handleChange}/>

        <div>
          <label>Address</label>
          <input
          type="text"
          name="address"
          id="address"
          value={this.state.address.address}
          onChange={this.handleAddressUpdate}/>

          <label>Postcode</label>
          <input
          type="text"
          name="postcode"
          id="postcode"
          value={this.state.postcode}
          onChange={this.handleAddressUpdate}
          />
        </div>

        <div>
        <label>Email</label>
        <input
        type="email"
        name="email"
        id="email"
        value={this.state.email}
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
      value={this.state.emergencyContact.name}
      onChange={this.handleEmergencyContactChange}
      />

      <label>Relationship</label>
      <input
      type="relationship"
      name="relationship"
      id="relationship"
      value={this.state.emergencyContact.relationship}
      onChange={this.handleEmergencyContactChange}
      />

        <label>Emergency Contact Number</label>
        <input
        type="tel"
        maxLength="11"
        name="number"
        id="number"
        value={this.state.emergencyContact.number}
        onChange={this.handleEmergencyContactChange}/>


      </fieldset>



      <fieldset>
      <h4>Dietary Details</h4>

      <label>Dietary Requirements</label>
      <input
      type="checkbox"
      name="dietaryDetails"
      value={this.state.dietaryRequirements.exists}
      onChange={this.handleDietaryChange}/>

      <div id="dietaryDetails" style={{display: "none"}}>
      <label>Details</label>
      <input
      type="text"
      name="details"
      value={this.state.dietaryRequirements.details}
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
      value={this.state.medicalConditions.exists}
      onChange={this.handleMedicalConditionsChange}/>

      <div id="medicalDetails" style={{display: "none"}}>
      <label>Details</label>
      <input
      type="text"
      name="details"
      value={this.state.medicalConditions.details}
      onChange={this.handleMedicalDetailsChange}/>

      <label>Medications</label>
      <input
      type="text"
      name="medications"
      value={this.state.medicalConditions.medications}
      onChange={this.handleMedicalDetailsChange}/>
      </div>

      <h4>Allergy Details</h4>

      <label>Allergies</label>
      <input
      type="checkbox"
      name="allergyDetails"
      value={this.state.allergies.exists}
      onChange={this.handleAllergyUpdate}/>


      <div id="allergyDetails" style={{display: "none"}}>
        <label>Details</label>
        <input
        type="text"
        name="details"
        value={this.state.allergies.details}
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
        checked={this.state.photographyPermission === true}
        onChange={this.handleRadioButtonChange}/>Yes
        </label>
        <label>
        <input
        type="radio"
        name="photographyPermission"
        value="false"
        checked={this.state.photographyPermission === false}
        onChange={this.handleRadioButtonChange}/>No
        </label>

      </fieldset>

      <fieldset>
        <label>To be collected ? </label>
        <input
        type="checkbox"
        name="collectionDetails"
        value={this.state.pickUp.toBeCollected}
        onChange={this.handlePickUpChange}/>

        <div id="collectionDetails" style={{display: "none"}}>
        <label>Collected By</label>
        <input
        type="text"
        name="byWho"
        value={this.state.pickUp.byWho}
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
        value={this.state.siblings.exists}
        onChange={this.handleSiblingsChange}/>

        <div id="siblingdetails" style={{display: "none"}}>
        <label>Name</label>
        <input
        type="text"
        name="siblings"
        value={this.state.siblings.siblings}
        onChange={this.handleSiblingsAdded}/>
        </div>

      </fieldset>

      <fieldset>
        <label>Ethnicity</label>
        <select
        name="ethnicityOther"
        id="ethnicity"
        onChange={this.handleEthinicityChange}>
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
        name="ethinicty"
        value={this.state.ethinicty}
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
      checked={this.state.volunteering === true}
      onChange={this.handleRadioButtonChange}/>Yes
      </label>
      <label>
      <input
      type="radio"
      name="volunteering"
      value="false"
      checked={this.state.volunteering === false}
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
          checked={this.state.signed.signed === true}
          onChange={this.handleSignatureRadioButtonChange}/>Yes
          </label>
          <label>
          <input
          type="radio"
          name="signed"
          value="false"
          checked={this.state.signed.signed === false}
          onChange={this.handleSignatureRadioButtonChange}/>No
          </label>

        <label>Date</label>
        <input
        type="date"
        name="date"
        value={this.state.signed.date}
        onChange={this.handleSignedChange}/>

        </fieldset>

        <fieldset>

        <button type="submit">Add new participant</button>

        </fieldset>
        </form>

      </>

  )
  }


  }

  export default Form;
