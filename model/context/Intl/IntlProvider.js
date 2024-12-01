import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { LOCALES } from '../../../presentation/intl/types';
import { createIntl } from '../../../presentation/intl';

const IntlContext = createContext();

export function IntlProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    // Load initial locale from local storage

    const storedLocale = localStorage.getItem('locale');
    return storedLocale || LOCALES[0];
  });

  const [intl, setIntl] = useState(() => createIntl(locale));

  useEffect(() => {
    const intl = createIntl(locale);
    setIntl(intl);

    localStorage.setItem('locale', locale);
  }, [locale]);

  return (
    <IntlContext.Provider value={{ intl, setLocale }}>
      {children}
    </IntlContext.Provider>
  );
}

export const useIntlContext = () => {
  const context = useContext(IntlContext);
  if (!context) {
    throw new Error('useIntlContext must be used within an IntlProvider');
  }
  return context;
};
