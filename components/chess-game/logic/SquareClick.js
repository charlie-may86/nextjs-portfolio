import { useAnswerContext } from "../../../context/AnswerContext";

const squareClick = (e, square) => {
  const { count, gameCount, handleAnswer, chessGameClick, handleCount } =
    useAnswerContext;
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

export default squareClick;
