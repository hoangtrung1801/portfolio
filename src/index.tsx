import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import theme from './theme/theme';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);