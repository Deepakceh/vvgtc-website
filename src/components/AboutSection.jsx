'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Top Heading */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-sky-600">
          Sachin Eduskills
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We are a government-supported NGO offering free skill-based education,
          helping underprivileged youth unlock real career opportunities.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/about.jpg"
            alt="Sachin Eduskills"
            width={600}
            height={400}
            className="rounded-2xl shadow-md w-full h-auto object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            <span className='text-sky-600'>SEPL</span> is a Private Limited Company working with Central Govt & many State Govts , offering free skill-based education, helping underprivileged youth unlock real career opportunities.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From foundational skills to career placement, our focus is holistic and impactful.
            With expert guidance, assessments, and real-world exposure, our students don't just learn — they transform.
          </p>
        </motion.div>
      </div>

      {/* Mission & Why Us */}
      <div className="mt-20 grid md:grid-cols-2 gap-12">
        {/* Mission Block */}
        <motion.div
          className="border-l-4 border-sky-600 pl-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            To empower India's youth through quality education, ensure equal access to opportunity,
            and build a nation where skills lead to stability.
          </p>
        </motion.div>

        {/* Why Choose Us Block */}
        <motion.div
          className="border-l-4 border-sky-600 pl-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-4 space-y-2 text-gray-700">
            <li>Completely Free, Government-Recognized Programs</li>
            <li>Skill-Oriented, Industry-Ready Curriculum</li>
            <li>Official Certification & Skill Exams</li>
            <li>Dedicated Placement Support & Partner Companies</li>
            <li>Real Career Outcomes — Not Just Training</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
