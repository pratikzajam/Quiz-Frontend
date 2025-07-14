import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </Routes>
  )
}

export default App
