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

  componentDidMount() {
    fetch(`https://swapi.co/api/people`)
      .then(peopleRes => peopleRes.json())
      .then (data => {
        //console.log(data)
        this.setState({
          characters: data 
        })
        console.log(this.state.characters)
      })
      .catch(err => console.log(err));
  }

  // handleSubmit = e => {
  //   //get value for api 
  //   e.preventDefault();
    
  //   //add to api
  // }
  

  render() {
    return (
      <main className="App">
        <h1>Search for a Star Wars Character:</h1>
        <div className="search">
          <SearchForm searchTerm={this.state.searchTerm} />
        </div>
        <div className="results">
          <ResultsList />
        </div>
      </main>
    );
  }
}

export default App;
