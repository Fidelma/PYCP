import React, {Component} from 'react';
import Form from '../components/registration/Form';


class RegistrationContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <h2> Registration Container </h2>
      <Form/>
      </>
    )
  }
}

export default RegistrationContainer;
