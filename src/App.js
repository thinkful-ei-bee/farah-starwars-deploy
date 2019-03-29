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
    console.log(searchTerm)
  }

  handleSubmit = e => {
    e.preventDefault();
    let url = `https://swapi.co/api/people/?search=`+this.state.searchTerm
    //get data from api
    fetch(url)
      .then(res => res.json())
      .then (data => {
        // add data from api to characters
        this.setState({
          characters: data 
        })
      // console.log(url)
      // console.log(this.state.characters.results)
      })
      .catch(err => console.log(err));
  }

  // searchResults = () => {
  //   const results = this.state.characters.results.map(character => 
  //     <div>
  //       <h3>{character}</h3>
  //     </div>
  //     )}


  render() {
    let resultsList = (!this.state.characters.results) ? [] : this.state.characters.results
    console.log(resultsList)
    resultsList = resultsList.map(character => 
      <div>
        <h3>{character.name}</h3>
      </div>)
      
    return (
      <main className="App">
        <h1>Search for a Star Wars Character:</h1>
        <div className="search">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="searchStarwars">
            Search: {' '}
          </label>
          <input 
            onChange={e => this.updateSearch(e.target.value)}
            placeholder="e.g. Luke Skywalker"
            id="searchStarwars" 
            type="text"/>{' '}
          <button type="submit">Go!</button>
        </form>
        </div>

        <div className="results">
          {resultsList}
        </div>
      </main>
    );
  }
}

export default App;
