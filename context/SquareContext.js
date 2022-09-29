import { createContext, useContext } from "react";

const SquareContext = createContext();

export const SquareContextProvider = ({children}) => {
    return (
        <SquareContext.Provider />
    )
}

export const useSquareContext = () => useContext(SquareContext);
