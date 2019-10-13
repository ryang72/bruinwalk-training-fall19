/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import * as React from 'react'

interface SearchBarProps {
  updateSearched: any;
}

interface SearchBarState {
  type: string;
  keyword: string;
  error: number;
  response: any;
  data: any;
}

export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  state: SearchBarState = { type: 'pokemon', keyword: '', error: 0, response: {}, data: {}}
  search = () => {
    let searchstring = `https://pokeapi.co/api/v2/${this.state.type}/${this.state.keyword}/`
    console.log(searchstring)
    this.setState({ response: this.state.response = fetch(`https://pokeapi.co/api/v2/${this.state.type}/${this.state.keyword}/`)
    .then(response => response.json())
    .then(data => {
      this.setState({data});
      this.props.updateSearched(data);
    })
  })
}

  render () {
    return (
      <div css={css`
        display: flex;
        flex-direction: row;
        width: 100px;
      `}>
       <select onChange={(event)=> this.setState({type: event.target.value})}>
        <option selected value="pokemon">Pokemon</option>
        <option value="items">Items</option>
        <option value="type">Type</option>
       </select>
       <input onChange={(event)=> this.setState({keyword: event.target.value})} type="text" placeholder="Pikachu"/>
       <button onClick={this.search}>Search</button>
     </div>
    );
  }
}