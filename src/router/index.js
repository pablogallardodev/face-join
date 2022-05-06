import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../views/Home'

export default function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}