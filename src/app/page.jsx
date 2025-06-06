import BannerSection from '../components/BannerSection'
import AboutSection from '../components/AboutSection'
import CourseSection from '../components/CourseSection'
import CurriculumSection from '../components/CurriculumSection'
export default function page() {

  return (
    <>
      <BannerSection />
      <AboutSection animateOnScroll={true} />
      <CourseSection />
      <CurriculumSection />
    </>
  )
}
