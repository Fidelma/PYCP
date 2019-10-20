import React, {Component} from 'react'
import NavBar from '../components/navigation/NavBar';
import Search from '../components/contact/Search';
import Collapsible from 'react-collapsible';


class ContactContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <NavBar />
      <h2> ContactContainer </h2>
      <Search people={this.props.people}/>
      </>
    )
  }
}

export default ContactContainer;
