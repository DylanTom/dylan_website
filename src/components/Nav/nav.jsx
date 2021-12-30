import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./index.module.css";

function Navigation() {
  return (
    <div className={styles.navigation}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <NavLink className={styles.navlink} to="/">
            Dylan Tom
          </NavLink>
          <div>
            <ul className={styles.navbarlist}>
              <li className={styles.navitem}>
                <NavLink className={styles.navlink} to="/">
                  About
                </NavLink>
              </li>
              <li className={styles.navitem}>
                <NavLink className={styles.navlink} to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
