import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './application/routes/AppRouter';
import './presentation/global/reset.css';
import './presentation/theme/theme.css';
import './presentation/global/global.css';

const rootElement = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(<AppRouter />);