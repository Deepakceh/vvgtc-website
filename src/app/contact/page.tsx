import ContactSection from '@/components/ContactSection'
import HeroSection from '../../components/HeroSection'
export default function page() {
  return (
    <>
      <HeroSection title="Contact Us" currentPage="contact" />
      <ContactSection />
    </>
  )
}
