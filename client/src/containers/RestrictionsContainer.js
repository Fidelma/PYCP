import React, {Component} from 'react';
import RestrictionsForm from '../components/restrictions/RestrictionsForm';
import RestrictionsSearch from '../components/restrictions/RestrictionsSearch';
import NavBar from '../components/navigation/NavBar';

class RestrictionsContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      filteredPerson: [],
      timeOut: [],
    }
    this.filterArray = this.filterArray.bind(this);
    this.handleRestrictionPost = this.handleRestrictionPost.bind(this);
  }

  filterArray(selectedName) {
      this.setState({filteredPerson: selectedName})
      console.log("this has changed on the container")
  }

  handleRestrictionPost(timeOut) {
    this.setState({timeOut:timeOut})
  }


  render(){
    return(
      <>
      <NavBar />
      <h2> Restriction Container </h2>
      <RestrictionsSearch people={this.props.people} filterArray={this.filterArray}/>
      <RestrictionsForm person={this.state.filteredPerson} handleRestrictionPost={this.handleRestrictionPost} />
      </>
    )
  }
}

export default RestrictionsContainer;
