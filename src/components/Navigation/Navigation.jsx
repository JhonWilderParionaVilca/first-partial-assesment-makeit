import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav__active}` : `${styles.nav__link}`
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.nav__active}` : `${styles.nav__link}`
          }
          to="/about"
        >
          ABOUT
        </NavLink>
      </nav>
    </header>
  );
}
