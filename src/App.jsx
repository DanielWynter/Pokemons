import "./App.css";
import React from "react";
import PokemonList from "./components/pokemons/PokemonList";
import Contador from "./components/View/Contador"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Contador />
        {/*<PokemonList />*/}
      </div>
    </div>
  );
}

export default App;
