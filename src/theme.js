import { createTheme } from '@mui/material/styles';
import { blue, teal } from  '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: teal['A400'],
      light: ''
    },
    secondary: {
      main: blue['A200']
    },
    error: {
      main: '#ef476f'
    },
    warning: {
      main: '#ffd166'
    },
    background: {
      main: '#132a3e'
    }
  },
});