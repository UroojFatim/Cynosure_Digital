import React from 'react'
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
  )
}

export default App
