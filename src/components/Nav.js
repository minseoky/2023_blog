import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <NavLink exact to="/" className={styles.navLink} activeClassName={styles.active}>
                        Home
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/LectureNotes" className={styles.navLink} activeClassName={styles.active}>
                        LectureNotes
                    </NavLink>
                </li>
                <li className={styles.navItem}>
                    <NavLink to="/menu2" className={styles.navLink} activeClassName={styles.active}>
                        Menu2
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
