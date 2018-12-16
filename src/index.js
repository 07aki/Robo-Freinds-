import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import { Component } from 'react';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyA9DDloAsaznJjt6DDQsRgNLg6TwzXuTcY';





// Create a new component. This component should produce some HTML
class App extends Component { 
  constructor(props) {
  	super(props);

  	this.state = { videos: [] }; // at the start the state dosent hae any videos

  	YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  		console.log(videos);
  		this.setState({ videos });
  	  //this.setState({ videos: videos});
  	});
  }

  render() {
   return( 
     <div>
     	<SearchBar />{/*Everytime new instance is created for SearchBar */}
      <VideoList videos={this.state.videos} />
     </div>
  );
 }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))