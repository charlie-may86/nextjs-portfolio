import { createContext, useContext } from "react";

const SquareContext = createContext();

export const useSquareContext = () => useContext(SquareContext);
