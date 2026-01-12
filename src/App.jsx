import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Experience from './pages/Experience'
import Fleamarket from './pages/projects/Fleamarket'
import FringeBenefits from './pages/projects/FringeBenefits'
import NlpPrediction from './pages/projects/NlpNextWord'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/fleamarket" element={<Fleamarket />} />
        <Route path="/projects/fringe" element={<FringeBenefits />} />
        <Route path="/projects/nlp" element={<NlpPrediction />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  )
}
