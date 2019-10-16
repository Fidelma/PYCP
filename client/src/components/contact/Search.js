import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

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
      <>
      <label >Search for existing person</label>
      <input type="text"
      value={this.state.search}
      onChange={this.updateSearch}/>

      {filteredPeople.map((person, index) => {
        return<ContactListItem person={person} key={index}/>
      })}

      </>
    )
  }

}

export default Search;
