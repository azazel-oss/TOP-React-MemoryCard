import { useState } from "react";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  function toggleGameFinishStatus() {
    if (!isGameFinished) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
    } else {
      setCurrentScore(0);
    }
    setIsGameFinished((prevState) => !prevState);
  }
  function handleScoreUpdate() {
    setCurrentScore((prevState) => prevState + 1);
  }
  return (
    <div>
      <header>
        <div>Memory Card</div>
        <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      </header>
      {isGameFinished ? (
        <main>
          Game is Over
          <button onClick={toggleGameFinishStatus}>Restart?</button>
        </main>
      ) : (
        <Game
          scoreUpdateHandler={handleScoreUpdate}
          endGameHandler={toggleGameFinishStatus}
        />
      )}
      <footer>Copyright &copy; Asad Mahmood</footer>
    </div>
  );
}

export default App;
