import React from "react";
import Pokecard from "./Pokecard";
import "./PokeList.css";

const PokeList = (props) => {
  return (
    <div className="pokecard-container">
      {props.pokemonList.map((pokemon) => {
        return (
          <Pokecard
            name={pokemon.name}
            id={pokemon.id}
            key={pokemon.id}
            image={pokemon.image}
            clickHandler={props.pokemonClickHandler}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
