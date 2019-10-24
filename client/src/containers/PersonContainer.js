import React, {Component} from 'react';
import PersonList from '../components/person/PersonList';
import Filter from '../components/person/Filter';
import NavBar from '../components/navigation/NavBar';


class PersonContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <>
      <NavBar/>
      <Filter people={this.props.people}
      editPersonDetails={this.props.editPersonDetails}/>
      </>
    )
  }
}

export default PersonContainer;
