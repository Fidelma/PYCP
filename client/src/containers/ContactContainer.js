import React, {Component} from 'react'
import ContactList from '../components/contact/ContactList';
import Search from '../components/contact/Search';

class ContactContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <h2> ContactContainer </h2>
      <Search people={this.props.people}/>
      </>
    )
  }
}

export default ContactContainer;
