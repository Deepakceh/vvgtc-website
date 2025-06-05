'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function BannerSection() {
  const banners = [
    {
      src: '/assets/images/banners/banner1.avif',
      title: 'Welcome to Sachin Eduskills',
      description: 'Empowering youth through free, government-backed skill development and training programs. Let’s build futures together.',
      buttonText: 'Join Us',
      buttonLink: '/contact',
    },
    {
      src: '/assets/images/banners/banner2.avif',
      title: 'Education That Transforms',
      description: 'We provide certified courses in IT, communication, digital skills, and more — all at no cost to underprivileged students.',
    },
    {
      src: '/assets/images/banners/banner3.avif',
      title: 'Assessment & Certification',
      description: 'After completing training, students take official assessments. Those who pass receive recognized government certifications.',
    },
    {
      src: '/assets/images/banners/banner4',
      title: 'Placement Support That Matters',
      description: 'We connect certified candidates with real job opportunities, internships, and partner companies for meaningful employment.',
    },
    {
      src: '/assets/images/banners/banner5',
      title: 'Success Stories Begin Here',
      description: 'Our alumni are working across industries, proving that the right guidance can turn ambition into achievement.',
    }
  ];


  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      spaceBetween={30}
      slidesPerView={1}
      effect={'fade'}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      loop={true}
      speed={1000}
      className="w-full"
    >
      {banners.map((banner, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative w-full h-[500px] md:h-[550px]">
            <img src={banner.src} alt={banner.title} className="w-full h-full object-cover brightness-[0.9]" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-6 md:px-16">
              <div className="max-w-xl">
                <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">{banner.title}</h2>
                <p className="text-white text-base md:text-lg mb-6">{banner.description}</p>
                {banner.buttonText && banner.buttonLink && (
                  <Link href={banner.buttonLink}>
                    <button className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer">
                      {banner.buttonText}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
