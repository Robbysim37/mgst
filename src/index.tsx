import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme,ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from "./state/store"


const theme = createTheme({
  palette:{
    primary:{
      main: "#4A0074",
      light:"#A47FB9",
      dark:"#4d4352"
    },
    secondary:{
      main: "#FFFFFF"
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);