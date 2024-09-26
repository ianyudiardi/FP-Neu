import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import pages
import Navbar from './components/blocks/Navbar'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Talent from './pages/Talent'
import Swaps from './pages/Swaps'
import SwapLayoutNew from './layouts/SwapLayoutNew'

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Talent" element={<Talent />} />
        <Route path="/Swaps" element={<Swaps />} />
        <Route path="/Swapstest" element={<SwapLayoutNew />} />
      </Routes>
    </BrowserRouter>
  )
}
