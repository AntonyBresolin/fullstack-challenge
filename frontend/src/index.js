import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/index.css';
import HomePage from './views/public/HomePage';
import User from './layouts/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/*" element={<User />} />
    </Routes>
  </BrowserRouter>
);
