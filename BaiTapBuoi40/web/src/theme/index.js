import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00b14f',
      light: '#e6f7ef',
      dark: '#008f40',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#004025',
      light: '#052e1b',
      dark: '#002616',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f4f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#212529',
      secondary: '#565e6c',
    },
    warning: {
      main: '#e65100',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Segoe UI", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          fontWeight: 600,
          backgroundColor: '#00b14f',
          '&:hover': {
            backgroundColor: '#008f40',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          border: '1px solid #e9ecef',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 10,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
