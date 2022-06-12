import React, { useState, useEffect } from "react";
import PokeList from "./PokeList";
import randomizeArray from "../utils/RandomizeArray";

const Game = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [rememberedPokemons, setRememberedPokemons] = useState([]);

  function handlePokemonClick(id) {
    if (!rememberedPokemons.includes(id)) {
      setRememberedPokemons((prevState) => [...prevState, id]);
      setPokemons((prevState) => randomizeArray(prevState));
      props.scoreUpdateHandler();
    } else {
      props.endGameHandler();
    }
  }

  useEffect(() => {
    let randomArray = [];
    while (randomArray.length < 20) {
      let num = Math.floor(Math.random() * 150 + 1);
      if (!randomArray.includes(num)) {
        randomArray.push(num);
      }
    }
    async function getPokemons(pokemonArray) {
      const pokemons = await Promise.all(
        pokemonArray.map(async (pokeId) => {
          const result = await fetch(
            "https://pokeapi.co/api/v2/pokemon/" + pokeId
          );
          const data = await result.json();
          return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
          };
        })
      );
      return pokemons;
    }
    getPokemons(randomArray).then((data) => setPokemons(data));
  }, []);
  return (
    <main>
      <div>Who's that pokemon?</div>
      <PokeList
        pokemonList={pokemons}
        pokemonClickHandler={handlePokemonClick}
      />
    </main>
  );
};

export default Game;
