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

  updateSearch = (searchTerm) => {
    this.setState({searchTerm});
  }

  handleSubmit = e => {
    e.preventDefault();
    //get data from api
    fetch(`https://swapi.co/api/people/?search=`+this.state.searchTerm)
      .then(res => res.json())
      .then (data => {
        // add data from api to characters
        this.setState({
          characters: data 
        })
      console.log(this.characters)
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <main className="App">
        <h1>Search for a Star Wars Character:</h1>
        <div className="search">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="searchStarwars">
              Search: {' '}
            </label>
            <input 
              onChange={e => this.updateSearch(e.target.value)}
              id="searchStarwars" 
              type="text"/>{' '}
            <button type="submit">Go!</button>
          </form>
        </div>
        <div className="results">
          <ResultsList />
        </div>
      </main>
    );
  }
}

export default App;
