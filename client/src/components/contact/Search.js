import React, { Component } from 'react';
import ContactListItem from './ContactListItem';
import '../../styles/Search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPeople:[],
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }
  updateSearch(event){
    this.setState({search: event.target.value.substr(0,20)});
  }
  render(){
    let filteredPeople = this.props.people.filter((person) => {
      return (
        (person.name.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || person.name.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)
      )
    })

    return(
      <div className="contact-form">
        <label >Search the Database</label>
        <input type="text"
        value={this.state.search}
        onChange={this.updateSearch}/>
        <div>
        <table className="contact-table">
          <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>School Year</th>
            <th>Primary Contact</th>
            <th>Secondary Contact</th>
            <th>Emergency Contact</th>
            <th>Options</th>
          </tr>
            {filteredPeople.map((person, index) => {
              return<ContactListItem person={person} key={index}/>
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Search;
