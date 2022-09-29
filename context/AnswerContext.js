import { createContext, useContext, useState, useRef } from "react";
import RandomSquareGenerator from "../components/chess-game/logic/RandomSquareGenny";

const AnswerContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const [square, setSquare] = useState("");
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [gameCount, setGameCount] = useState(8);
  const startTime = useRef(null);

  const handleAnswer = (gameDone) => {
    if (gameDone) {
      console.log("total time: ", (Date.now() - startTime.current) / 1000);
      setTotalTime((Date.now() - startTime.current) / 1000);
    }
    setAnswer(true);
  };

  const chessGameClick = () => {
    const row = RandomSquareGenerator();
    setSquare(row);
    if (count === 0) {
      startTime.current = Date.now();
    }
    count === 0 ? setCount(count + 1) : setCount(0);
    console.log(startTime);
  };

  const handleCount = (i) => {
    setCount(count + i);
  };

  const handleGameCount = (i) => {
    setGameCount(i);
  };

  const contextTest = () => {
    console.log('This is the test');
  }

  return (
    <AnswerContext.Provider
      value={{
        answer,
        handleAnswer,
        totalTime,
        chessGameClick,
        handleCount,
        count,
        gameCount,
        handleGameCount,
        setTotalTime,
        contextTest,
        square
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswerContext = () => useContext(AnswerContext);
