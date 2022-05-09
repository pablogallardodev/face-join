import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../views/Home'
import Loby from '../views/Loby'

const Router = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/loby" element={<Loby />}/>
  </Routes>
</BrowserRouter>
}

export default Router