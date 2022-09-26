import React from "react";
import { useNebContext } from "../../../context/NebContext";

const SubmitPicks = () => {
  const { pick, handleSubmit } = useNebContext();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="game" value="Game" onChange={() => null} />
          <input
            type="text"
            name="gamePick"
            value={pick.winner ? pick.winner : "-"}
            onChange={() => null}
          />
        </div>
        <div>
          <input type="text" name="pick" value="Winner" onChange={() => null} />
          <input
            type="text"
            name="winner"
            value={pick.spread ? pick.spread : "-"}
            onChange={() => null}
          />
        </div>
        <button>Submit Pick</button>
      </form>
    </div>
  );
};

export default SubmitPicks;
