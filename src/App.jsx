import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Navbar from './components/blocks/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Talent from './pages/Talent'
import Swaps from './pages/Swaps'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/talent" element={<Talent />} />
        <Route path="/swaps" element={<Swaps />} />     
        <Route path="/profile" element={<Profile />} />     
      </Routes>
    </BrowserRouter>
  )
}
