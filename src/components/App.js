import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from '../components/ui/header.js';
import Footer from '../components/ui/footer.js';
import Theme from '../components/ui/theme.js';
import { ThemeProvider } from '@mui/material/styles';
import Home from '../components/home.js';
import Dashboard from '../components/dashboard.js';
import Login from '../components/login.component.jsx';
import Register from '../components/register.component.jsx';
import Reset from '../components/reset.component.jsx';
import GameOne from '../components/gameone.js';
import Contact from '../components/contact.js';
import About from '../components/about.js';

function App() {
  return (
  <ThemeProvider theme = {Theme}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />
        <Route path='/gameone' element={<GameOne />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </ThemeProvider>
  );
}

export default App;
