import React, { useState } from 'react';
import PokemonCard from "./components/PokemonCard";
import NavBar from './components/NavBar';
import './App.css';

function App(){
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
        <NavBar
          setPokemonIndex={setPokemonIndex}
          pokemonList={pokemonList}
        />
      </>
    );
  }
  
  export default App;


