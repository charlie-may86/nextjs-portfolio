import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        <a
          href="https://github.com/charlie-may86"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://trello.com/b/wd7Jy3Xu/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          To Do
        </a>
      </div>
      <FontAwesomeIcon icon={faBars} className={styles.navDropDown}>
        <ul className={styles.dropDownMenu}>
          <Link href="/cv" className={styles.dropDwonItem}>
            CV
          </Link>
          <Link href="/chess_game" className={styles.dropDwonItem}>
            Chess Game
          </Link>
          <Link href="/cfb_pick_em" className={styles.dropDwonItem}>
            CFB Pickem
          </Link>
          <a
            href="https://github.com/charlie-may86"
            target="_blank"
            rel="noreferrer"
            className={styles.dropDwonItem}
          >
            GitHub
          </a>
          <a
            href="https://trello.com/b/wd7Jy3Xu/portfolio"
            target="_blank"
            rel="noreferrer"
            className={styles.dropDwonItem}
          >
            To Do
          </a>
        </ul>
      </FontAwesomeIcon>
    </header>
  );
};

export default Header;
