import React, {Component} from 'react';
import PersonList from '../components/person/PersonList';
import NavBar from '../components/navigation/NavBar';


class PersonContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <NavBar/>
      <h2>Person Container</h2>
      <PersonList people={this.props.people}/>
      </>
    )
  }
}

export default PersonContainer;
