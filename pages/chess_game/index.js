import { AnswerContextProvider } from "../../context/AnswerContext";
import ChessBoard from "../../components/chess-game/ChessBoard";
import GameButtons from "../../components/chess-game/GameButtons";

const ChessGame = () => {
  return (
    <AnswerContextProvider>
      <div>
        <ChessBoard />
      </div>
      <div>
        <GameButtons />
      </div>
    </AnswerContextProvider>
  );
};

export default ChessGame;
