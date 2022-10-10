import React from "react";
import { useTopTen } from "../../../context/TopTenContext";
import styles from './TopTen.module.css'

const TopTen = () => {
  const { topTen, isLoading } = useTopTen();

  if (isLoading) {
    return <div>loading</div>;
  } else {
    return (
      <div className={styles.TopTenContainer}>
        <div>All Time Greatest</div>
        {topTen.map((x) => {
          return (
            <div className={styles.topTenRow} key={x.result_id}>
              <div className={styles.name}>{x.username}</div>
              <div>{x.time}</div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default TopTen;
