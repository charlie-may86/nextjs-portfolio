import { createContext, useContext } from "react";

const AnswerContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const handleThis = () => {
    console.log('testing');
  };
  return (
    <AnswerContext.Provider value={{handleThis}}>
      {children}
    </AnswerContext.Provider>
  );
};

export const useAnswerContext = () => useContext(AnswerContext);
