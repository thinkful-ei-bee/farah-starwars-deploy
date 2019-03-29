import React from 'react';

export default class ResultsList extends React.Component{
  render(){
    let resultsList = (!this.props.results) ? [] : this.props.results.results

    const results = resultsList.map(character => 
      <div className="search-results" key={character.name}>
        <div>
            <h3>{character.name}</h3>
        </div>
      </div>)

      return(
        <div>
          {results}
        </div>
      )
  }
}