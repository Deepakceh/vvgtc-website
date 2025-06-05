import AboutSection from '../../components/AboutSection'
import HeroSection from '../../components/HeroSection'
import StatsSection from '../../components/StatsSection'
import MissionSection from '../../components/MissionSection'
export default function page() {
  return (
    <>
      <HeroSection title="About Us" currentPage="about" />
      <AboutSection />
      <StatsSection />
      <MissionSection />
    </>
  )
}
