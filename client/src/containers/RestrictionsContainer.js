import React, {Component} from 'react';
import RestrictionsForm from '../components/restrictions/RestrictionsForm';
import NavBar from '../components/navigation/NavBar';

class RestrictionsContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <NavBar />
      <h2> Restriction Container </h2>
      <RestrictionsForm/>
      </>
    )
  }
}

export default RestrictionsContainer;
