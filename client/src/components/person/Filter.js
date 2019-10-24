import React, { Component } from 'react';
import PersonListItem from './PersonListItem';
import '../../styles/tables.css';
import '../../styles/generalStyles.css';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPeople:[],
      filterList: '',
      checkboxUpdate: [],
      checkboxes: [
      {year: 'P1', checked: false},
      {year: 'P2', checked: false},
      {year: 'P3', checked: false},
      {year: 'P4', checked: false},
      {year: 'P5', checked: false},
      {year: 'P6', checked: false},
      {year: 'P7', checked: false},
      {year: 'S1', checked: false},
      {year: 'S2', checked: false},
      {year: 'S3', checked: false},
      {year: 'S4', checked: false},
      ],
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.toggleChange = this.toggleChange.bind(this);
  }

  updateFilter(event){
    this.setState({filterList: event.target.value.substr(0,20)});
  }


//this function needs to be finished
  toggleChange(index, e) {
      let newChecked = this.state.checkboxes.slice();
      newChecked[index].checked = !newChecked[index].checked
      const filtered = newChecked.filter(entry => Object.values(entry).some(val => val === true));

      this.setState({checkboxUpdate: filtered.map(({ year }) => year)})
  }


  render(){
    let filteredPeople = this.props.people.filter((person) => {
      const fullName = person.name.firstName+" "+person.name.lastName;
      return (
        fullName.toLowerCase().indexOf(this.state.filterList.toLowerCase()) !== -1
        )
      })
      if (this.state.checkboxUpdate.length > 0) {
        filteredPeople = filteredPeople.filter((person) => {
        return this.state.checkboxUpdate.includes(person.school.year)
      })
    }

    return(
      <div className="contact-form">

      <div className='filterPeople'>
      <h2>Register Filter</h2>
        <form className='filterPeople'>
          <h3>Filter by Name</h3>
          <input type="text" value={this.state.filterList} onChange={this.updateFilter}/><br/>
        </form>

        <div >
          <h3>Add Year Groups</h3>
          <ul>
            {this.state.checkboxes.map((age, i) => {
              return(

              <li className="person-checkboxes" key={i} >
                {age.year}
                <input value={age.checked} checked={age.checked} type="checkbox" onChange={this.toggleChange.bind(this, i)} />
              </li>
            )})}
          </ul>
        </div>
</div>
        <div>

          // <button type="Reset">Clear Filters</button>

        </div>

        <div>
        <table align="center">
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
              return<PersonListItem person={person}
              key={index}
              editPersonDetails={this.props.editPersonDetails}/>
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

export default Filter;



// <label htmlFor="P1">P1</label>
// <input id="P1" key="index" type="checkbox" onChange={this.toggleChange} name="P1" value="true"/>
//
// <label htmlFor="P2">P2</label>
// <input id="P2" type="checkbox" onChange={this.toggleChange} name="P2" value="true"/>
//
// <label htmlFor="P3">P3</label>
// <input id="P3" type="checkbox" onChange={this.toggleChange}name="P3" value="true"/>
//
// <label htmlFor="P4">P4</label>
// <input id="P4" type="checkbox" onChange={this.toggleChange} name="P4" value="true"/>
//
// <label htmlFor="P5">P5</label>
// <input id="P5" type="checkbox" onChange={this.toggleChange} name="P5" value="true"/>
//
// <label htmlFor="P6">P6</label>
// <input id="P6" type="checkbox" onChange={this.toggleChange} name="P6" value="true"/>
//
// <label htmlFor="P7">P7</label>
// <input id="P7" type="checkbox" onChange={this.toggleChange} name="P7" value="true"/>
//
// <label htmlFor="S1">S1</label>
// <input id="S1" type="checkbox" onChange={this.toggleChange} name="S1" value="true"/>
//
// <label htmlFor="S2">S2</label>
// <input id="S2" type="checkbox" onChange={this.toggleChange} name="S2" value="true"/>
//
// <label htmlFor="S3">S3</label>
// <input id="S3" type="checkbox" onChange={this.toggleChange} name="S3" value="true"/>
//
// <label htmlFor="S4">S4</label>
// <input id="S4" type="checkbox" onChange={this.toggleChange} name="S4" value="true"/>
