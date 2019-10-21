import React, {Component} from 'react';
import RestrictionsForm from '../components/restrictions/RestrictionsForm';
import RestrictionsSearch from '../components/restrictions/RestrictionsSearch';
import NavBar from '../components/navigation/NavBar';

class RestrictionsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredPerson: [],
    }
    this.filterArray = this.filterArray.bind(this);
  }

  filterArray(selectedName) {
      this.setState({filteredPerson: selectedName})
      console.log("this has changed on the container")
  }


  render(){
    return(
      <>
      <NavBar />
      <h2> Restriction Container </h2>
      <RestrictionsSearch people={this.props.people} filterArray={this.filterArray}/>
      <RestrictionsForm people={this.props.people} filterArray={this.filterArray}/>
      </>
    )
  }
}

export default RestrictionsContainer;
