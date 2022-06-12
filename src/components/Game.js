import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import PokeList from "./PokeList";
import RandomizeArray from "../utils/RandomizeArray";

const Game = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [rememberedPokemons, setRememberedPokemons] = useState([]);

  function handlePokemonClick(id) {
    console.log(id);
    if (!rememberedPokemons.includes(id)) {
      setRememberedPokemons((prevState) => [...prevState, id]);
      setCurrentScore((prevState) => prevState + 1);
      setPokemons((prevState) => RandomizeArray(prevState));
    } else {
      if (currentScore > props.bestScore) {
        props.bestScoreHandler(currentScore);
        props.endGameHandler();
      }
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
    <div>
      <header>
        <div>Memory Card</div>
        <Scoreboard bestScore={props.bestScore} currentScore={currentScore} />
      </header>
      <main>
        <div>Who's that pokemon?</div>
        <PokeList
          pokemonList={pokemons}
          pokemonClickHandler={handlePokemonClick}
        />
      </main>
      <footer>Copyright &copy; Asad Mahmood</footer>
    </div>
  );
};

export default Game;
