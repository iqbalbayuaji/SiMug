import Navbar from "../components/Navbar"
import PromoBanner from "../components/PromoBanner"
import HeroSection from "../components/HeroSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PromoBanner />
      <HeroSection userName="Rizki Fiko" />
      
      {/* Additional sections can be added here */}
      {/* Example: Featured Courses, Recent Activities, etc. */}
    </div>
  )
}
