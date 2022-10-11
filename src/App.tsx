import { clear } from 'console';
import { Router } from 'express';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';

function App() {
  /*
  return (
    <div className="App">
      <h1>Show Me</h1>
    </div>
  );
  */
 return (
  <BrowserRouter>
    <Routes>
      <Route  path='/' element={<LoginPage />} />
      <Route path='/main' element={<MainPage />} />
    </Routes>
  </BrowserRouter>
 );
}

export default App;
