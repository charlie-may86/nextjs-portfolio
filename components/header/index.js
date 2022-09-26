import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>
        <h1>Charlie May</h1>
      </div>
      <div className={styles.headerNav}>
        <a href="http://localhost:3000/cv">CV</a>
        <a href="http://localhost:3000/chessGame">Chess Game</a>
        <a href="http://localhost:3000/cfb_pick_em">CFB Pickem</a>
        <a href="https://github.com/charlie-may86">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
