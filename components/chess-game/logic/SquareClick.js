import { useAnswerContext } from "../../../context/AnswerContext";

const useSquareClick = () => {
  const { count, gameCount, handleAnswer, chessGameClick, handleCount } =
    useAnswerContext();

  const handleSquareClick = (e, square) => {
    console.log("this is the props test");
    if (e.target.className.slice(0, 2) === square && count < gameCount) {
      console.log(`${e.target.className.slice(0, 2)} equals ${square}`);
      handleAnswer();
      chessGameClick();
      handleCount(1);
    } else if (e.target.className.slice(0, 2) === square) {
      console.log(`${e.target.className.slice(0, 2)} equals ${square}`);
      handleAnswer(true);
      handleCount(-gameCount);
    } else {
      console.log(`${e.target.className.slice(0, 2)} does not equal ${square}`);
    }
  };
  return { handleSquareClick };
};

export default useSquareClick;
