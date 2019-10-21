import React, {Component} from 'react';

class ActivityForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      day: '',
      startTime: '',
      endTime: '',
      age: [],
      ageCheckboxes: [
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
      gender: '',
      location: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange({ target: { value, name } }) {
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    const newActivity = {
      title: this.state.title,
      day: this.state.day,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      age: this.state.age,
      gender: this.state.gender,
      location: this.state.location,
      description: this.state.description
    }
    this.props.addActivity(newActivity);
    this.setState({
    title: '',
    day: '',
    startTime: '',
    endTime: '',
    age: [
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
    gender: '',
    location: '',
    description: ''})
  }

  onToggle(index, e){
  let newAges = this.state.ageCheckboxes.slice();
  newAges[index].checked = !newAges[index].checked
  const filtered = newAges.filter(entry => Object.values(entry).some(val => val === true ));
  this.setState({
    age: filtered.map(({ year }) => year)
  })

  }



render(){
  const isTrue = this.props.displayActivityForm;

  if (!isTrue ){
    return null;
  }
  return(



  <form>
  <fieldset>
    <fieldset>
    <div>
      <label>Activity Title</label>
      <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} required/>
    </div>
    </fieldset>

    <fieldset>
    <div>
      <label>Day</label>
      <select name="day" id="day" value={this.state.day} onChange={this.handleChange} required>
        <option value="" defaultValue disabled hidden>Select Here</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
    </div>

    <div>
      <label>Start Time</label>
      <input type="time" id="startTime" name="startTime" value={this.state.startTime} onChange={this.handleChange} required/>
    </div>

    <div>
      <label>End Time</label>
      <input type="time" id="endTime" name="endTime" value={this.state.endTime} onChange={this.handleChange} required/>
    </div>
    </fieldset>

    <fieldset>
      <div>
        <ul>
          {this.state.ageCheckboxes.map((age, i) => {
            return(
          	<li key={i}>
              {age.year}
          	  <input value={age.checked} checked={age.checked} type="checkbox" onChange={this.onToggle.bind(this, i)} />
          	</li>
          )})}
        </ul>
      </div>

    <div>
      <label>Gender</label>
      <select name="gender" id="gender" value={this.state.gender} onChange={this.handleChange} required>
        <option value="" defaultValue disabled hidden>Select Here</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Both">Both</option>

      </select>
    </div>

    <div>
      <label>Location</label>
      <input type="text" id="location" name="location" value={this.state.location} onChange={this.handleChange} required/>
    </div>

    <div>
      <label>Description</label>
      <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} required>
      </textarea>
    </div>

    <div>
      <button type="submit" onClick={this.handleSubmit}>Submit</button>
    </div>

    </fieldset>
    </fieldset>
  </form>
)
}


}

export default ActivityForm;
