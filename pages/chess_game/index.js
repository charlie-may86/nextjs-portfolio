import { AnswerContextProvider } from "../../context/AnswerContext";
import ChessBoard from "../../components/chess-game/ChessBoard";
import GameButtons from "../../components/chess-game/GameButtons";
import TopTen from "../../components/chess-game/TopTen";
import { TopTenProvider } from "../../context/TopTenContext";
import styles from "./ChessGame.module.css";

const ChessGame = () => {
  return (
    <AnswerContextProvider>
      <TopTenProvider>
        <div className={styles.gameArea}>
          <ChessBoard />
          <GameButtons />
          <TopTen />
        </div>
      </TopTenProvider>
    </AnswerContextProvider>
  );
};

export default ChessGame;
