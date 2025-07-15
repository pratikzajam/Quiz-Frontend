import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import UserDashboard from './pages/UserDashboard.jsx'
import QuizPage from './pages/QuizPage';
import LandingPage from './pages/LandingPage.jsx'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App
