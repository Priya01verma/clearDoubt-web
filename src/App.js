import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from './MuiTheme';
import './App.css';
import AllQuestion from './Screens/Question-Solution';
import Solution from "./Screens/Question-Solution/Solution";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={MuiTheme}>
      {/* <AllQuestion /> */}
      <Solution />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
