import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './MuiTheme';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MuiTheme} >
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
