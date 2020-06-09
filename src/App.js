import React from 'react';
import { createStore, Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import HeaderNav from './components/header/';
import Index from './routes';



function App() {
  return (
    // <Provider>
      <>
        <BrowserRouter key={Math.random()}>
          <HeaderNav/>
          <Index/>
        </BrowserRouter>
      </>
    // </Provider>
  );
}

export default App;
