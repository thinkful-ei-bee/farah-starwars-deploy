import React from 'react';

export default class SearchForm extends React.Component{
  state = {
    inputValid: false,
    validationMessages: {}
  }
  
  render(){
    return (
      <form >
          <label htmlFor="newNote">
            Search: {' '}
          </label>
          <input 
            placeholder="e.g. Luke Skywalker"
            id="newNote" 
            type="text"/>{' '}
          <button>Go!</button>
        </form>
    )
  }
}