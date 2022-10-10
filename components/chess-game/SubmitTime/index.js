import React, { useState } from "react";

import axios from "axios";
import { useTopTen } from "../../../context/TopTenContext";
import { useAnswerContext } from "../../../context/AnswerContext";

const SubmitTime = () => {
  const { totalTime, gameCount, setTotalTime } = useAnswerContext();
  const { getTopTen } = useTopTen();

  const [newTime, setNewTime] = useState({
    username: "",
    time: totalTime,
    game_length: gameCount,
  });

  const handleIntials = (e) => {
    setNewTime({
      ...newTime,
      [e.target.name]: e.target.value,
    });
  };

  const submitTime = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/chess", newTime)
      .then((res) => {
        console.log(res);
        getTopTen();
      })
      .catch((err) => {
        console.log(err);
      });
    setTotalTime(0);
  };

  return (
    <div className="timeForm">
      <form onSubmit={submitTime}>
        <label htmlFor="intials">Initials</label>
        <input
          type="text"
          name="username"
          value={newTime.username}
          onChange={handleIntials}
          maxLength="3"
          className="intialsInput"
        />
        <label htmlFor="time">Time</label>
        <input type="float" name="time" value={newTime.time} readOnly />
        <button className="submitScore">Submit</button>
      </form>
    </div>
  );
};

export default SubmitTime;
