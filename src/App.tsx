import React from 'react'
import './App.css'
import PokemonPage from './pages/PokemonPage'
import SearchBar from './components/SearchBar'
import Pokecards from './components/Pokecards/Pokecards'
import 'semantic-ui-css/semantic.min.css'

export default class App extends React.Component<{}, {searched: any, selected: string}> {
  state:{searched: any, selected: string}  = { searched: {}, selected: ""}
  render () {
    const {searched, selected} = this.state;
    console.log(this.state);
  return (
    <div className="App">
      <SearchBar updateSearched={(newVal: string) => this.setState({searched: newVal})} />
      <Pokecards pokeInfo={searched} updateSelected={(newVal: string) => this.setState({selected: newVal})} />
      <PokemonPage pokeName={selected}/>
    </div>
  );}
};
