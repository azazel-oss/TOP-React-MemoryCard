import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  function handlePokemonClick() {
    props.clickHandler(props.id);
  }
  return (
    <div className="pokecard" onClick={handlePokemonClick}>
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="name">
        {props.name[0].toUpperCase() + props.name.slice(1)}
      </div>
    </div>
  );
};

export default Pokecard;
