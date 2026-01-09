import Navbar from "../components/layout/Navbar"
import PromoBanner from "../components/layout/PromoBanner"
import HeroSection from "../components/home/HeroSection"
import TopicsSection from "../components/home/TopicsSection"
import PopularCoursesSection from "../components/home/PopularCoursesSection"
import RecommendedCoursesSection from "../components/home/RecommendedCoursesSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PromoBanner />
      <HeroSection userName="Rizki Fiko" />
      <TopicsSection />
      <PopularCoursesSection />
      <RecommendedCoursesSection />
      
      {/* Additional sections can be added here */}
      {/* Example: Featured Courses, Recent Activities, etc. */}
    </div>
  )
}
