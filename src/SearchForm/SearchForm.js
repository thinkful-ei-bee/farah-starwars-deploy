import ResultsList from '../ResultsList/ResultsList'
import React from 'react';



export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationMessages: {}
  }

  updateSearch = (searchTerm) => {
    this.setState({searchTerm});
  }

  handleSubmit = e => {
    e.preventDefault();
    let url = `https://swapi.co/api/people/?search=`+this.state.searchTerm

    fetch(url)
      .then(res => res.json())
      .then (data => {
        this.setState({
          characters: data 
        })
      })
      .catch(err => console.log(err));
  }

  
  render(){
    return (
      <div>
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

          <section className="display-results">
            <ResultsList results={this.state.characters}/>
          </section>
        
        </div>
    )
  }
}