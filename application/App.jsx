import React from 'react';
import * as styles from './App.module.css';
import '../presentation/global/reset.css';
import { AppRouter } from './controller';
import { IntlProvider } from '../model';

function App() {
  return (
    <IntlProvider>
      <div className={styles.App}>
        <AppRouter />
      </div>
    </IntlProvider>
  );
}

export default App;
