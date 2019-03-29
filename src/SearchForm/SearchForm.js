import React from 'react';

export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationMessages: {}
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
      console.log(url)
      })
      .catch(err => console.log(err));
  }

  
  render(){
    return (
      <div className="search-form">
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
    )
  }
}