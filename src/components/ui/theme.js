import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffa726',
    },
    secondary: {
      main: '#2196f3',
    },
  },
});

export default Theme;
