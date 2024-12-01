import React from 'react';
import { Login, CRM, Dashboard } from '../../views';

export const LOGIN_ROUTE = '/';
export const LOGIN_LABEL = 'Login';
export const DASHBOARD_ROUTE = '/dashboard';
export const DASHBOARD_LABEL = 'Dashboard';
export const CRM_ROUTE = '/crm';
export const CRM_LABEL = 'CRM';

export const APP_ROUTES = [
  { path: LOGIN_ROUTE, component: <Login />, label: LOGIN_LABEL, id: '0' },
  {
    path: DASHBOARD_ROUTE,
    component: <Dashboard />,
    label: DASHBOARD_LABEL,
    id: '1',
  },
  {
    path: CRM_ROUTE,
    component: <CRM />,
    label: CRM_LABEL,
    id: '2',
  },
];
