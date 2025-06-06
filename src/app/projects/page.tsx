import HeroSection from '../../components/HeroSection'
import CourseSection from '@/components/CourseSection'
export default function page() {
  return (
    <>
      <HeroSection title="Our Projects" currentPage="projects" />
      <CourseSection />
    </>
  )
}
