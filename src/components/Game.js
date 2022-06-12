import React, { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import PokeList from "./PokeList";

const Game = () => {
  const [pokemons, setPokemons] = useState([]);
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
        <Scoreboard />
      </header>
      <main>
        <div>Who's that pokemon?</div>
        <PokeList pokemonList={pokemons} />
      </main>
      <footer>Copyright &copy; Asad Mahmood</footer>
    </div>
  );
};

export default Game;
