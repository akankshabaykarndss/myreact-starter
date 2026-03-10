import React from 'react'
import Navbar from './components/Navbar'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/about'
import Contact from './components/Contact'



const App = () => {
  return (
    <div>
      <Navbar/>
  
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
