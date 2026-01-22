import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import HomePage from './pages/HomePage'
import ProgressPage from './pages/ProgressPage'
import SearchResultPage from './pages/SearchResultPage'
import ChatbotPage from './pages/chatbot/ChatbotPage'
import CoursesPage from './pages/courses/CoursesPage'
import CourseDetailPage from './pages/courses/CourseDetailPage'
import RoadmapPage from './pages/courses/RoadmapPage'
import CourseProgressDetailPage from './pages/courses/CourseProgressDetailPage'
import AssignmentPage from './pages/courses/AssignmentPage'
import ProfilePage from './pages/ProfilePage'

import ForumIntroPage from './pages/ForumIntroPage'
import Forum from './pages/ForumPage'

import ArtikelPage from './pages/ArtikelPage'
import ForumSearchPage from './pages/ForumSearchPage'
import JawabPertanyaanPage from './pages/JawabPertanyaanPage'
import TambahPertanyaanPage from './pages/TambahPertanyaanPage'
import ForumBerandaPage from './pages/ForumBerandaPage'
import ForumAboutPage from './pages/ForumAboutPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:slug" element={<CourseDetailPage />} />
        <Route path="/roadmap/:courseId" element={<RoadmapPage />} />
        <Route path="/course-progress/:phaseId" element={<CourseProgressDetailPage />} />
        <Route path="/assignment/:phaseId" element={<AssignmentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/forum-intro" element={<ForumIntroPage />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/search" element={<ForumSearchPage />} />
        <Route path="/forum/beranda" element={<ForumBerandaPage />} />
        <Route path="/forum/beranda/about" element={<ForumAboutPage />} />
        <Route path="/jawab-pertanyaan" element={<JawabPertanyaanPage />} />
        <Route path="/tambah-pertanyaan" element={<TambahPertanyaanPage />} />
        <Route path="/artikel" element={<ArtikelPage />} />
        <Route path="/artikel/:id" element={<ArtikelPage />} />
      </Routes>
    </Router>
  )
}

export default App

