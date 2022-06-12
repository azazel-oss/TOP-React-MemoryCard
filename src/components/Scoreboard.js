import React from "react";

const Scoreboard = (props) => {
  return (
    <div>
      Current Score: {props.currentScore} <br />
      Best Score: {props.bestScore}
    </div>
  );
};

export default Scoreboard;
