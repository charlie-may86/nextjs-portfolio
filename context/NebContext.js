import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const NebContext = createContext();

export const NebContextProvider = ({ children }) => {
  const [myData, setmyData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [pick, setPick] = useState({});

  //   https://sportsdata.io/developers/api-documentation/ncaa-football#/sports-data

  const handleClick = (val) => {
    // refactor this to search my data for the id and then return all the data you need
    setPick({
      username: "Charlie",
      winner: val.target.value,
      spread: val.target.name,
    });
    console.log(val.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/cfb/pickem", pick)
      .then((res) => {
        setPick({});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cfb")
      .then((res) => {
        setmyData(
          res.data.filter((x) => x.HomeTeam === "NEBR" || x.AwayTeam === "NEBR")
        );
        setIsLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <NebContext.Provider
      value={{ myData, isLoading, pick, handleClick, handleSubmit }}
    >
      {children}
    </NebContext.Provider>
  );
};

export const useNebContext = () => useContext(NebContext);
