'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Section 1: Mission */}
      <section className="bg-red-100 text-red-800 text-center py-20 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          To empower underprivileged youth through free, high-quality, skill-based education.
          <br />
          We strive to transform learning into livelihood by bridging the gap between talent and opportunity — with practical training, expert mentorship, and real career outcomes.
        </motion.p>
      </section>


      {/* Section 2: About + How We Work */}
      <section className="bg-red-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-red-600 mb-2">About</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              VVG Trading Company Pvt. Ltd.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              VVG Trading Company Pvt. Ltd. is a private limited company working closely with the Central Government and multiple State Governments to provide free, skill-based education to underserved youth across India.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From foundational training to career placement, our programs are designed to be holistic, practical, and impact-driven. We enable youth to build real-world capabilities that directly translate into employment opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With certified trainers, industry-aligned curriculum, and real exposure through assessments and internships, VVG Trading Company Pvt. Ltd. is shaping futures — not just through learning, but through true transformation.
            </p>

          </motion.div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/images/banners/banner1.avif"
              alt="Office Environment"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
            <Image
              src="/assets/images/banners/banner2.avif"
              alt="Team Collaboration"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
            <Image
              src="/assets/images/banners/banner3.avif"
              alt="Professional Meeting"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
            <Image
              src="/assets/images/banners/banner4" // Make sure to include the correct extension (.jpg/.png/.avif)
              alt="Work Culture"
              width={300}
              height={200}
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
