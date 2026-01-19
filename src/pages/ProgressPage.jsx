import { useState } from "react"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import ProgressHeader from "../components/progress/ProgressHeader"
import StatsCards from "../components/progress/StatsCards"
import MainContent from "../components/progress/MainContent"
import CalendarSection from "../components/progress/CalendarSection"

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("beranda")
  const [selectedDate, setSelectedDate] = useState(4)
  const userName = "Rizki Fiko"

  // Sample data for recent learning
  const recentLearning = [
    {
      id: 1,
      title: "Workout di Rumah aja Tanpa Alat untuk Menjaga Kebuga...",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      progress: 0,
      completion: 35,
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Panduan Meditasi yang Benar untuk Kesehatan Mental da...",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      progress: 0,
      completion: 45,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Teknik Pernapasan yang Efektif Saat Lari untuk Meni...",
      instructor: "Moh. Iqbal",
      duration: "1 bulan lalu",
      progress: 0,
      completion: 55,
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=300&fit=crop"
    }
  ]

  // Calendar data for January 2026
  const daysInMonth = 31
  const startDay = 3 // Wednesday (0 = Sunday)
  const currentDay = 16
  const targetDays = [4, 6, 7, 16, 19] // Days with targets

  const getDayClass = (day) => {
    if (day === currentDay) return "bg-[#4177FF] text-white"
    if (targetDays.includes(day)) return "bg-[#4177FF] text-white"
    return "text-gray-700 hover:bg-gray-100"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ProgressHeader 
          userName={userName}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <MainContent recentLearning={recentLearning} />
          
          <CalendarSection 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            daysInMonth={daysInMonth}
            startDay={startDay}
            currentDay={currentDay}
            getDayClass={getDayClass}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}
