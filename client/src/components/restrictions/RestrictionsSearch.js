import React, { Component } from 'react';

class RestrictionsSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPerson:[],
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  // const options = this.props.people.map((person, index) => {
  //   return <option value ={index} key={index}>
  //     {person.name.firstName}
  //   </option>
  // })

  updateSearch({target: {value}}) {
    this.setState({search: value.substr(0,20)});
    this.props.filterArray(value);
  }

  render(){

    return(
      <div>
          <div id="myDropdown" class="dropdown-content">
          <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"/>
          </div>


            <label>Search for child</label>
            <input type="text"
            value={this.state.search}
            onChange={this.updateSearch}/>

      </div>
    )
  }

}

export default RestrictionsSearch;


// <select>
//   <option disabled value="default">Choose a Child</option>
//   {options}
// </select>
