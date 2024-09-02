

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Pages/LandingPage'
import Home from  './Pages/Home';
import WatchHistory from  './Pages/WatchHistory';
import "animate.css";

function App() {
  

  return (
    <>
    <Header/>

    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/watchhistory" element={<WatchHistory />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
