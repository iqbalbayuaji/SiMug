import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/HomePage'
import SearchResultPage from './pages/SearchResultPage'
import ChatbotPage from './pages/chatbot/ChatbotPage'
import CoursesPage from './pages/courses/CoursesPage'
import CourseDetailPage from './pages/courses/CourseDetailPage'

import ForumIntroPage from './pages/ForumIntroPage'
import Forum from './pages/ForumPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/forum-intro" element={<ForumIntroPage />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  )
}

export default App

