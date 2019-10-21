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

  updateSearch({target: {value}}){
    this.props.filterArray(value);
  }

  render(){

    return(
      <div>
        <label >Search for child</label>
        <input type="text"
        value={this.state.search}
        onChange={this.updateSearch}/>
      </div>
    )
  }

}

export default RestrictionsSearch;
