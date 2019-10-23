import React, {Component} from 'react'
import NavBar from '../components/navigation/NavBar';
import Search from '../components/contact/Search';


class ContactContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <NavBar />
      <Search people={this.props.people}/>
      </>
    )
  }
}

export default ContactContainer;
