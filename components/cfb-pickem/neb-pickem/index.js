import React from "react";
import { useNebContext } from "../../../context/NebContext";
import styles from "./NebPickem.module.css";

const NebPickEm = () => {
  const { myData, isLoading, handleClick } = useNebContext();
  console.log(myData);
  console.log(isLoading);

  if (!isLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <div className={styles.schedule}>
          <h2>Nebraska Cornhuskers Schedule 2022</h2>
          <h3>Regular Season</h3>
          <div className={styles.heading}>
            <div>date</div>
            <div>opponent</div>
            <div>time</div>
            <div>Point Spread</div>
            <div>Pick em'!</div>
          </div>
          {myData.map((x) => {
            return (
              <div className={styles.gameWeek} key={x.GameID}>
                <div className={styles.date}>
                  {new Date(x.Day).toDateString().slice(0, 10)}
                </div>
                <div>
                  {x.AwayTeam === "NEBR"
                    ? `@ ${x.HomeTeamName}`
                    : `vs ${x.AwayTeamName}`}
                </div>
                <div>
                  {x.DateTime
                    ? new Date(x.DateTime).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "TBD"}
                </div>
                {/* <div>{x.OverUnder ? x.OverUnder : "Available Game Week"}</div> */}
                <div>
                  {x.PointSpread ? x.PointSpread : "Available Game Week"}
                </div>
                <div className={styles.buttonDiv}>
                  <button
                    className={styles.pickEm}
                    onClick={handleClick}
                    value={x.AwayTeam.slice(0, 4)}
                    name={x.PointSpread}
                  >
                    {x.AwayTeam.slice(0, 4)}
                  </button>{" "}
                  <button
                    className={styles.pickEm}
                    onClick={handleClick}
                    value={x.HomeTeam.slice(0, 4)}
                    name={x.PointSpread}
                  >
                    {x.HomeTeam.slice(0, 4)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default NebPickEm;
