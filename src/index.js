/*jshint esversion: 6 */

'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YT_API_KEY = 'AIzaSyBNSN0VyilMYKG5JHBtZnuYgE9x4LxH82c';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: YT_API_KEY, term: 'esri'}, (videos) => {
      this.setState({ videos });
    })
  }

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
