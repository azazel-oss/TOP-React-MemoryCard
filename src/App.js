import { useState } from "react";
import Game from "./components/Game";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  function toggleGameFinishStatus() {
    setIsGameFinished((prevState) => !prevState);
  }
  function handleBestScore(score) {
    setBestScore(score);
  }
  return (
    <div>
      {isGameFinished ? (
        <div>
          Game is Over
          <button onClick={toggleGameFinishStatus}>Restart?</button>
        </div>
      ) : (
        <Game
          bestScore={bestScore}
          bestScoreHandler={handleBestScore}
          endGameHandler={toggleGameFinishStatus}
        />
      )}
    </div>
  );
}

export default App;
