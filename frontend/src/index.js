import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './assets/styles/index.css';
import HomePage from './views/public/HomePage';
import User from './layouts/User';
import { AuthProvider } from './routes/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/*" element={<PrivateRoute element={User} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
