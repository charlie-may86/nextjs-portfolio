import React from "react";
import { useTopTen } from "../../../context/TopTenContext";

const TopTen = () => {
  const { topTen, isLoading } = useTopTen();

  if (isLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div className="topTen">
        <div>All Time Greatest</div>
        {topTen.map((x) => {
          return (
            <div className="topTenRow" key={x.result_id}>
              <div className="name">{x.username}</div>
              <div>{x.time}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default TopTen;
