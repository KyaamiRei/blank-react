import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from './pages/main/main-page';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  </React.StrictMode>
);
