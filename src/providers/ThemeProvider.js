import React, { createContext, useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const lightTheme = 'light';
const darkTheme = 'dark';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = useCallback(
    () => setTheme((previousTheme) => (previousTheme === lightTheme ? darkTheme : lightTheme)),
    [],
  );
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
