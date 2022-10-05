import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App.js';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './Store';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
