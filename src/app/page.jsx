import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import ProjectSection from '../components/ProjectSection'
import CourseSection from '../components/CourseSection'
import MissionSection from '../components/MissionSection'
import CurriculumSection from '../components/CurriculumSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <StatsSection />
      <ProjectSection />
      <CourseSection />
      <MissionSection />
      <CurriculumSection />
    </>
  )
}
