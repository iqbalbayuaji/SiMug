import Navbar from "../components/layout/Navbar"
import PromoBanner from "../components/layout/PromoBanner"
import Footer from "../components/layout/Footer"
import HeroSection from "../components/home/HeroSection"
import TopicsSection from "../components/home/TopicsSection"
import PopularCoursesSection from "../components/home/PopularCoursesSection"
import RecommendedCoursesSection from "../components/home/RecommendedCoursesSection"
import HotFreshCourseSection from "../components/home/HotFreshCourseSection"
import EventSection from "../components/home/EventSection"
import FAQSection from "../components/home/FAQSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PromoBanner />
      <HeroSection userName="Rizki Fiko" />
      <TopicsSection />
      <PopularCoursesSection />
      <RecommendedCoursesSection />
      <HotFreshCourseSection />
      <EventSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
