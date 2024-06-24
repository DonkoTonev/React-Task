
// Router

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import FirstQuestion from './pages/first-question'
import ProgressBar from './pages/components/progress-bar'
import SecondQuestion from './pages/second-question';
import ThirdQuestion from './pages/third-question';
import FourthQuestion from './pages/fourth-question';
import FiveQuestion from './pages/five-question';
import Results from './pages/results';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import image from './assets/image.jpg';




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route index element={<ProgressBar />} /> */}
          <Route path='/first' element={<FirstQuestion />} />
          <Route path='/second' element={<SecondQuestion />} />
          <Route path='/third' element={<ThirdQuestion />} />
          <Route path='/fourth' element={<FourthQuestion />} />
          <Route path='/fifth' element={<FiveQuestion />} />
          <Route path='/results' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}