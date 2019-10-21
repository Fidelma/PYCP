import React, { Component } from 'react';
import PersonListItem from './PersonListItem';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPeople:[],
      filter: ''
    };
    this.updateFilter = this.updateFilter.bind(this);
  }
  updateFilter(event){
    this.setState({filter: event.target.value.substr(0,20)});
  }
  render(){
    
    let filteredPeople = this.props.people.filter((person) => {
      const fullName = person.name.firstName+" "+person.name.lastName;
      return (
        (person.school.year.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 || fullName.toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1 )
      )
    })

    return(
      <div className="contact-form">
      
        <label>Filter by Name or Year</label>
        <input type="text" value={this.state.filter} onChange={this.updateFilter}/><br/>

        <div>
          <input type="checkbox" name="yearGroup" value="P1" onClick={this.updateFilter}/>
          <label for="P1">P1</label>
        </div>

        <div>
          <input type="checkbox" name="yearGroup" value="P7" onClick={this.updateFilter}/>
          <label for="P7">P7</label>
        </div>

        <div>
        <table className="contact-table">
          <tbody>
          <tr>
           <th>Full Name</th>
           <th>Last Name</th>
           <th>School Year</th>
           <th>Information</th>
           <th>Attendance</th>
           <th>Options</th>
          </tr>
            {filteredPeople.map((person, index) => {
              return<PersonListItem person={person} key={index}/>
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Filter;
