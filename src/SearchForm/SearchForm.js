import ResultsList from '../ResultsList/ResultsList'
import React from 'react';

export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationSearch: {}
  }

  updateSearch = (searchTerm) => {
    this.setState({searchTerm});

    // const validationSearch = {...this.state.validationSearch};
    // let inputValid = true;

    // if(this.state.searchTerm === null) {
    //   validationSearch.searchTerm = 'Looks like you forgot to type something in!'
    //   inputValid = false;
    // }
    // this.setState({validationSearch, inputValid})
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
   // const { searchTerm, validationSearch } = this.state
    let searchInput = (!this.state.searchTerm) ? '' :  this.state.searchTerm.length
    const isEnabled = searchInput >= 1
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="searchStarwars">
              {/* Search: {' '}
               {validationSearch.searchTerm && (
                <p className="error">{validationSearch.searchTerm}</p> 
              )} */}
            </label>
            <input 
              onChange={e => this.updateSearch(e.target.value)}
              placeholder="e.g. Luke Skywalker"
              id="searchStarwars" 
              type="text"/>{' '}
            <button disabled={!isEnabled} type="submit">Go!</button>
          </form>

          <section className="display-results">
            <ResultsList results={this.state.characters}/>
          </section>
        
        </div>
    )
  }
}