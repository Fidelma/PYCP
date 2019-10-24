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
      <Form addPerson={this.props.addPerson}/>
      </>
    )
  }
}

export default RegistrationContainer;
