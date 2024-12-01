import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from 'react-router-dom';
import { APP_ROUTES } from './routes';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../model';

export default function AppRouter() {
  return (
    <Router>
      <Nav />
      <Routes>
        {APP_ROUTES.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={
              <PrivateRoute id={route.id}>{route.component}</PrivateRoute>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children, id }) {
  const { views } = useSelector(selectUser);

  if (views?.includes(id) || id === APP_ROUTES[0].id) {
    return children;
  }

  return <Navigate to="/" />;
}
