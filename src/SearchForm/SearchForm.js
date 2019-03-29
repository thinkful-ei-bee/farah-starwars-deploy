import React from 'react';

export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationMessages: {}
  }

  updateSearch = (searchTerm) => {
    console.log(searchTerm)
    this.setState({searchTerm});
  }

  handleSubmit = e => {
    e.preventDefault();
    //get data from api
    fetch(`https://swapi.co/api/people/?search=`+this.searchTerm)
      .then(res => res.json())
      .then (data => {
        // add data from api to characters
        this.setState({
          characters: data 
        })
      // console.log(this.characters)
      })
      .catch(err => console.log(err));
  }

  
  render(){
    return (
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
    )
  }
}