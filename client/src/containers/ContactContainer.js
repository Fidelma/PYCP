import React, {Component} from 'react'
import ContactList from '../components/contact/ContactList';

class ContactContainer extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <>
      <h2> ContactContainer </h2>
      <ContactList people={this.props.people}/>
      </>
    )
  }
}

export default ContactContainer;
