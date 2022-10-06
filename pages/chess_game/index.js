import { AnswerContextProvider } from "../../context/AnswerContext";
import ChessBoard from "../../components/chess-game/ChessBoard";
import GameButtons from "../../components/chess-game/GameButtons";
import TopTen from "../../components/chess-game/TopTen";
import { TopTenProvider } from "../../context/TopTenContext";

const ChessGame = () => {
  return (
    <AnswerContextProvider>
      <TopTenProvider>
        <div>
          <ChessBoard />
        </div>
        <div>
          <GameButtons />
          <TopTen />
        </div>
      </TopTenProvider>
    </AnswerContextProvider>
  );
};

export default ChessGame;
