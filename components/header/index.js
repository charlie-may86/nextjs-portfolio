import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerName}>
        <h1>Charlie May</h1>
      </div>
      <div className={styles.headerNav}>
        <Link href="/cv">CV</Link>
        <Link href="/chess_game">Chess Game</Link>
        <Link href="/cfb_pick_em">CFB Pickem</Link>
        <a href="https://github.com/charlie-may86">GitHub</a>
        <a href="https://trello.com/b/wd7Jy3Xu/portfolio">To Do</a>
      </div>
    </header>
  );
};

export default Header;
