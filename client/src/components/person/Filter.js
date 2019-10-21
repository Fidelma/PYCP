import React, { Component } from 'react';
import PersonListItem from './PersonListItem';
import './Filter.css'

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

  checkboxFilter(event){

  }

  uncheckAll2() {
    var inputs = document.querySelectorAll('.check2');
    for(var i = 0; i < inputs.length; i++) {
      inputs[i].checked = false;
    }
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
          <label htmlFor="P1">P1</label>
          <input id="P1" type="checkbox" name="yearGroup" value="P1" onClick={this.updateFilter}/>
          
          <label htmlFor="P2">P2</label>
          <input id="P2" type="checkbox" name="yearGroup" value="P2" onClick={this.updateFilter}/>

          <label htmlFor="P3">P3</label>
          <input id="P3" type="checkbox" name="yearGroup" value="P3" onClick={this.updateFilter}/>
          
          <label htmlFor="P4">P4</label>
          <input id="P4" type="checkbox" name="yearGroup" value="P4" onClick={this.updateFilter}/>
          
          <label htmlFor="P5">P5</label>
          <input id="P5" type="checkbox" name="yearGroup" value="P5" onClick={this.updateFilter}/>
          
          <label htmlFor="P6">P6</label>
          <input id="P6" type="checkbox" name="yearGroup" value="P6" onClick={this.updateFilter}/>
          
          <label htmlFor="P7">P7</label>
          <input id="P7" type="checkbox" name="yearGroup" value="P7" onClick={this.updateFilter}/>
          
          <label htmlFor="S1">S1</label>
          <input id="S1" type="checkbox" name="yearGroup" value="S1" onClick={this.updateFilter}/>
          
          <label htmlFor="S2">S2</label>
          <input id="S2" type="checkbox" name="yearGroup" value="S2" onClick={this.updateFilter}/>
          
          <label htmlFor="S3">S3</label>
          <input id="S3" type="checkbox" name="yearGroup" value="S3" onClick={this.updateFilter}/>
          
          <label htmlFor="S4">S4</label>
          <input id="S4" type="checkbox" name="yearGroup" value="S4" onClick={this.updateFilter}/>

          <button type="Reset">Clear Filters</button>
          
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
