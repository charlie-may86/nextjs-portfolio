import React from "react";

import { useAnswerContext } from "../../../context/AnswerContext";
import useSquareClick from "../logic/SquareClick";
import styles from "./ChessBoard.module.css";

const ChessBoard = () => {
  const horzAxis = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const vertAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const { handleSquareClick } = useSquareClick();

  let board = [];

  //   const whichSquare = useContext(SquareContext);
  const value = useAnswerContext();

  const handleClick = (e) => {
    handleSquareClick(e, value.square, value);
  };

  for (let j = vertAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horzAxis.length; i++) {
      const num = j + i + 2;

      if (num % 2 === 0) {
        board.push(
          <div
            className={`${horzAxis[i]}${vertAxis[j]} ${styles.blackTile}`}
            onClick={handleClick}
            key={`${horzAxis[i]}${vertAxis[j]}`}
          >
            {/* [{horzAxis[i]}
              {vertAxis[j]}] */}
          </div>
        );
      } else {
        board.push(
          <div
            className={`${horzAxis[i]}${vertAxis[j]} ${styles.whiteTile}`}
            onClick={handleClick}
            key={`${horzAxis[i]}${vertAxis[j]}`}
          >
            {/* [{horzAxis[i]}
              {vertAxis[j]}] */}
          </div>
        );
      }
    }
  }

  return <div id={styles.chessboard}>{board}</div>;
};

export default ChessBoard;
