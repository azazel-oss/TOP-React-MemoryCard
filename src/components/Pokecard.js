import React from "react";

const Pokecard = (props) => {
  function handlePokemonClick() {
    console.log(props.id);
    props.clickHandler(props.id);
  }
  return (
    <div onClick={handlePokemonClick}>
      <img src={props.image} alt={props.name} />
      <br />
      {props.name[0].toUpperCase() + props.name.slice(1)}
    </div>
  );
};

export default Pokecard;
