import React, {Component} from 'react';
import Form from '../components/registration/Form';
import NavBar from '../components/navigation/NavBar';

class RegistrationContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <NavBar />
      <h2> Registration Container </h2>
      <Form
      addPerson={this.props.addPerson}
      handleNewFormData={this.props.handleNewFormData}
      handleChange={this.props.handleChange}
      handleNameUpdate={this.props.handleNameUpdate}
      handleAddressUpdate={this.props.handleAddressUpdate}
      handleEmergencyContactChange={this.props.handleEmergencyContactChange}
      handleSignedChange={this.props.handleSignedChange}
      handleDietaryChange={this.props.handleDietaryChange}
      handleDietaryDetailChange={this.props.handleDietaryDetailChange}
      handleMedicalConditionsChange={this.props.handleMedicalConditionsChange}
      handleMedicalDetailsChange={this.props.handleMedicalDetailsChange}
      handleAllergyUpdate={this.props.handleAllergyUpdate}
      handleAllergyDetailsChange={this.props.handleAllergyDetailsChange}
      handleSchoolChange={this.props.handleSchoolChange}
      handleRadioButtonChange={this.props.handleRadioButtonChange}
      handlePickUpChange={this.props.handlePickUpChange}
      handlePickUpDetailsChange={this.props.handlePickUpDetailsChange}
      handleSiblingsAdded={this.props.handleSiblingsAdded}
      handleSiblingsChange={this.props.handleSiblingsChange}
      handleEthnicityChange={this.props.handleEthnicityChange}
      handleSignatureRadioButtonChange={this.props.handleSignatureRadioButtonChange}
      edit={this.props.edit}
      person={this.props.person}
      />
      </>
    )
  }
}

export default RegistrationContainer;
