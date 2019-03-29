import React from 'react';

export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationMessages: {}
  }

  handleSubmit = e => {
    e.preventDefault();
    //get form fields from event
    const search  = e.target.value;
    console.log(search);
    this.setState({
      searchTerm: search,
    })

    //get data from api
    fetch(`https://swapi.co/api/people`)
      .then(peopleRes => peopleRes.json())
      .then (data => {
        // add data from api to characters
        this.setState({
          characters: data 
        })
      console.log(this.characters)
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
            // onChange={e => this.handleSubmit(e.target.value)}
            placeholder="e.g. Luke Skywalker"
            id="searchStarwars" 
            type="text"/>{' '}
          <button type="submit">Go!</button>
        </form>
    )
  }
}