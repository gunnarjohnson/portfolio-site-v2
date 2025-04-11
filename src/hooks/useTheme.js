import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
};

export default useTheme;
