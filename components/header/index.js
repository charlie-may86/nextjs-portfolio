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
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <ul>
            <li>
              <a href="#">Our Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </ul>
      </div>
      {/* <ul className={styles.dropDownMenu}>
        <li>
          <FontAwesomeIcon icon={faBars} className={styles.navDropDown}>
            <ul>
              <li>
                <Link href="/cv" className={styles.dropDwonItem}>
                  CV
                </Link>
              </li>
              <li>
                <Link href="/chess_game" className={styles.dropDwonItem}>
                  Chess Game
                </Link>
              </li>
              <li>
                <Link href="/cfb_pick_em" className={styles.dropDwonItem}>
                  CFB Pickem
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/charlie-may86"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.dropDwonItem}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://trello.com/b/wd7Jy3Xu/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.dropDwonItem}
                >
                  To Do
                </a>
              </li>
            </ul>
          </FontAwesomeIcon>
        </li>
      </ul> */}
    </header>
  );
};

export default Header;
