import { AnswerContextProvider } from "../../context/AnswerContext";
import ChessBoard from "../../components/chess-game/ChessBoard";

const ChessGame = () => {
  return (
    <AnswerContextProvider>
      <ChessBoard />
    </AnswerContextProvider>
  );
};

export default ChessGame;
