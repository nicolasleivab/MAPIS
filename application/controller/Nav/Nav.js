import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Nav.module.css';
import { APP_ROUTES } from '../Router/routes';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../model';

export default function Nav() {
  const { views } = useSelector(selectUser);

  const filteredRoutes = APP_ROUTES.filter(
    (route) => views?.includes(route.id) || route.id === APP_ROUTES[0].id
  );

  return (
    <nav className={styles.Nav}>
      <ul className={styles.navList}>
        {filteredRoutes.map((route, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink
              to={route.path}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.navLink
              }
            >
              {route.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
