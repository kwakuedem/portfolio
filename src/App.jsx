import { useState } from 'react'
import './App.css'
import './index.css'
import '../src/components/NavigationBar'
import NavigationBar from '../src/components/NavigationBar'
import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Layout from './pages/Portfolio'
import Home from './pages/Home'
import Blogs from "./pages/Blogs";
import Experience from './pages/Experience'
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='experience' element={<Experience/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='blogs' element={<Blogs/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      
    </Routes>
  )
}
export default App
