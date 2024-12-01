// src/components/UserProfile.jsx

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  logoutUser,
  loginUserAsync,
  selectUser,
  selectIsAuthenticated,
} from '../../../model';
import * as styles from './Login.module.css';

export default function Login() {
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  // TODO remove this after implementing real login, this is a demo to show how it works
  useEffect(() => {
    const timer = setTimeout(() => {
      // Dispatch the thunk instead of the action
      dispatch(loginUserAsync({}));
    }, 3000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [dispatch, isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Logging in 3 seconds...</div>;
  }

  return (
    <div className={styles.Login}>
      <h2>User Profile</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
