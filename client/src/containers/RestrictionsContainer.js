import React, {Component} from 'react';
import RestrictionsForm from '../components/restrictions/RestrictionsForm';
import RestrictionsSearch from '../components/restrictions/RestrictionsSearch';
import RestrictionsList from '../components/restrictions/RestrictionsList';
import NavBar from '../components/navigation/NavBar';

class RestrictionsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredPerson: '',
      personWithRestriction: ''
    }
    this.filterArray = this.filterArray.bind(this);
    this.handleRestrictionPost = this.handleRestrictionPost.bind(this);
  }

//sets filteredPerson state to the object of the selected person from the dropdown
  filterArray(selectedPerson) {
      this.setState({filteredPerson: selectedPerson})
  }

//handleRestrcitionPost must update filteredPerson timeOut parameters and then pass to homePage to update database
  handleRestrictionPost(timeOut) {
    const updatedPerson = this.state.filteredPerson
    updatedPerson.timeOut = timeOut
    this.setState({personWithRestriction: updatedPerson})
    this.props.updatePerson(updatedPerson);
  }

  render(){
    return(
      <>
      <NavBar />
      <h2> Restriction Table </h2>
        <table>
          <tbody>
            <tr>
              <th>first name</th>
              <th>last name</th>
              <th>startDate</th>
              <th>endDate</th>
              <th>reason</th>
            </tr>
            {this.props.people.map((person, index) => {
              return<RestrictionsList person={person} key={index}/>
            })}
          </tbody>
        </table>
        <br/>
      <RestrictionsSearch people={this.props.people} filterArray={this.filterArray}/>
      <RestrictionsForm handleRestrictionPost={this.handleRestrictionPost} />
      </>
    )
  }
}

export default RestrictionsContainer;



//   restrictionsList() {
//   const list = this.props.people.map((person, index) => {
//     return <li value={index} key={index}>
//       {person.name.firstName} {person.name.lastName}
//     </li>
//   })
// }
