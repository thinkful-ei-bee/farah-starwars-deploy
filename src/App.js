import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm'
import './App.css';

class App extends Component {
  state = {
    characters: {},
    searchTerm: '',
    error: null,
  }


  render() {  
    return (
      <main className="App">
        <h1>Search for a Star Wars Character:</h1>
        <div className="search">
        <SearchForm characters={this.state.characters} searchTerm={this.state.searchTerm}/>
        </div>
      </main>
    );
  }
}

export default App;
