import React from "react";
import { useAnswerContext } from "../../../context/AnswerContext";
import SubmitTime from "../SubmitTime";
import styles from './GameButtons.module.css'

const GameButtons = () => {
  const value = useAnswerContext();
  // console.log('this is the game count: ', value.gameCount);

  // const [totalTime, setTotalTime] = useState(value.totalTime)

  // const gameLengthClick = (val) => {
  //   value.handleGameCount(val);
  // };
  return (
    <div className={styles.buttonArea}>
      {/* <button onClick={() => gameLengthClick(8)}>8</button> */}
      {/* <button onClick={() => gameLengthClick(16)}>16</button> */}
      <button onClick={() => value.chessGameClick()} className={styles.startButton} >
        {value.count === 0 ? "start" : "stop"}
      </button>
      <div>{value.count === 0 ? "" : value.square}</div>
      <div>{value.totalTime === 0 ? "" : value.totalTime}</div>
      <div>{value.totalTime === 0 ? "" : value.totalTime}</div>
      <div>{value.totalTime === 0 ? "" : <SubmitTime />}</div>
    </div>
  );
};

export default GameButtons;
