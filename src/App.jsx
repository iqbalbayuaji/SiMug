import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/HomePage'
import ChatbotPage from './pages/ChatbotPage'

import ForumIntroPage from './pages/ForumIntroPage'
import Forum from './pages/ForumPage'
import ArtikelPage from './pages/ArtikelPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/forum-intro" element={<ForumIntroPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/artikel/:id" element={<ArtikelPage />} />
      </Routes>
    </Router>
  )
}

export default App
