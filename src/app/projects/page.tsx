import HeroSection from '../../components/HeroSection'
import ProjectSection from '@/components/ProjectSection'
import CourseSection from '@/components/CourseSection'
import StatsSection from '../../components/StatsSection'
export default function page() {
  return (
    <>
      <HeroSection title="Our Projects" currentPage="projects" />
      <ProjectSection />
      <CourseSection />
      <StatsSection />
    </>
  )
}
