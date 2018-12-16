import React, { Component } from 'react';

//Funtional based component
//const SearchBar = () => {
//  return <input />;   // Used to take input from users
//};

class SearchBar extends Component {
  constructor(props) {
  	super(props);

  	this.state = { term: ''};
  }

	render() {
		return(
			<div>
		      return <input 
		      value={this.state.term}
		      onChange={event => this.setState({ term: event.target.value })}/>
		    </div>
		);
	}
}

export default SearchBar;