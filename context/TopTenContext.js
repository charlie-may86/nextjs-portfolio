import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const TopTenContext = createContext();

const TopTenProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [topTen, setTopTen] = useState(null);

  const getTopTen = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:9000/api/chess/white/eight"
      );
      setTopTen(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopTen();
  }, []);

  return (
    <TopTenContext.Provider
      value={{
        getTopTen,
        isLoading,
        topTen,
      }}
    >
      {children}
    </TopTenContext.Provider>
  );
};

export const useTopTen = () => useContext(TopTenContext);
export default TopTenProvider;
