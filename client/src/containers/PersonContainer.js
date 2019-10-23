import React, {Component} from 'react';
import PersonList from '../components/person/PersonList';
import Filter from '../components/person/Filter';
import NavBar from '../components/navigation/NavBar';
import Form from '../components/registration/Form.js';


class PersonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    if(this.props.displayForm){
      return (
        <>
        <NavBar displayRegistrationForm={this.props.displayRegistrationForm}
        displayRegisterList={this.props.displayRegisterList}/>
        <Form />
        </>
      )
    } else {
    return(
      <>
      <NavBar displayRegistrationForm={this.props.displayRegistrationForm}
      displayRegisterList={this.props.displayRegisterList}/>
      <h2>Drop Downs</h2>
      <Filter people={this.props.people}/>
      </>
    )
  }
  }
}

export default PersonContainer;
