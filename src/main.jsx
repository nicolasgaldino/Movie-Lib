import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='movies/:id' element={<Search />} />
          <Route path='search' element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
