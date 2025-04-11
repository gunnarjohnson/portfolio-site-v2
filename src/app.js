import React from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './components/PortfolioApp';
import ThemeProvider from './providers/ThemeProvider';
import './scripts/faLib';
import './styles/styles.css';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <PortfolioApp />
  </ThemeProvider>,
);
