import { createContext, useContext } from "react";

const AnswerContext = createContext();

export const useAnswerContext = () => useContext(AnswerContext);