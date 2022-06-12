import { useState, useEffect } from "react";
import Game from "./components/Game";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  useEffect(() => {
    const storedBestScore = localStorage.getItem("bestScorePokeMemo");
    if (storedBestScore) {
      setBestScore(Number.parseInt(storedBestScore));
    }
  }, []);
  function toggleGameFinishStatus() {
    if (!isGameFinished) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
        localStorage.setItem("bestScorePokeMemo", currentScore.toString());
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
    <div className="container">
      <header>
        <div className="logo">Memory Card</div>
        <Scoreboard bestScore={bestScore} currentScore={currentScore} />
      </header>
      {isGameFinished ? (
        <main>
          <div className="overlay">
            <div className="restart-modal">
              <div className="message">Game Over</div>
              <div className="points">
                You scored {currentScore}{" "}
                {currentScore === 1 ? "point" : "points"}
              </div>
              <button onClick={toggleGameFinishStatus}>Restart?</button>
              <div className="best-score">Best score: {bestScore}</div>
            </div>
          </div>
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
