import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./components/PokemonCard"

const App = () => {
  const [pokemonIndex,setPokemonIndex] =
  useState(0); 

  const handleNextPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };

  const handlePreviousPokemon = () => {
    setPokemonIndex((prevIndex) => (prevIndex - 1 + pokemonList.length) % pokemonList.length);
  };

  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <p>
        {pokemonIndex > 0 && <button type="button" onClick={handlePreviousPokemon}>Previous Pokemon</button>}
        {pokemonIndex < pokemonList.length - 1 && <button type="button" onClick={handleNextPokemon}>Next Pokemon</button>}
      </p>
    </>
  );
}

export default App;


