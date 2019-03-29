import React, { Component } from 'react';
import SearchForm from './SearchForm/SearchForm'
import ResultsList from './ResultsList/ResultsList'
import './App.css';

class App extends Component {
  state = {
    characters: {},
    searchTerm: '',
    error: null,
  }

  resultsList = () => {
    console.log(this.state.characters)
    let searchResults = (!this.state.characters) ? [] : this.state.characters
    searchResults = Object.keys(this.state.characters.map(character => 
      <div>
        <h3>{character}</h3>
      </div>))
  }


  render() {
    return (
      <main className="App">
        <h1>Search for a Star Wars Character:</h1>
        <div className="search">
          <SearchForm />
        </div>
        <div className="results">
          <ResultsList />
        </div>
      </main>
    );
  }
}

export default App;
