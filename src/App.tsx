import React from 'react'
import './App.css'
import PokemonPage from './pages/PokemonPage'
import 'semantic-ui-css/semantic.min.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonPage />
    </div>
  );
}

export default App;
