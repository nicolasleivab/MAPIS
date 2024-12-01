import React from 'react';
import * as styles from './App.module.css';
import '../presentation/global/reset.css';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { AppRouter } from './controller';
import { IntlProvider } from '../model';

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <IntlProvider>
      <MantineProvider theme={theme}>
        <div className={styles.App}>
          <AppRouter />
        </div>
      </MantineProvider>
    </IntlProvider>
  );
}

export default App;
