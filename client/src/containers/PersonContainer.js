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
      <h2>Drop Downs</h2>
      <Filter people={this.props.people}/>
      </>
    )
  }
}

export default PersonContainer;
