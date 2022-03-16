import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme/theme';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/portfolio">
      {/* <BrowserRouter basename="/portfolio"> */}
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);