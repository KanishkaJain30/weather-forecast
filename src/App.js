import React, { Component, isValidElement }from 'react';
import SearchBar from './containers/search-bar.js';
import WeatherList from './containers/weatherlist.js'
//import './components/style/style.css';
import './App.css';
class App extends Component {
  render(){
    return (
      <div>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}

export default App;
