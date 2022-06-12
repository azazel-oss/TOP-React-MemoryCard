import React from "react";

const Pokecard = (props) => {
  return (
    <div>
      Image:
      <img src={props.image} alt={props.name} />
      {props.name[0].toUpperCase() + props.name.slice(1)}
    </div>
  );
};

export default Pokecard;
