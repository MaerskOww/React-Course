import React from 'react';

import { ThemeProvider } from '@emotion/react';
// eslint-disable-next-line sort-imports
import { CssBaseline } from '@mui/material';

import { purpleTheme } from './';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
