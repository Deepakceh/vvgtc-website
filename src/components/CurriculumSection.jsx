'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Step 1: Registration',
    desc: 'Enroll in your desired course by completing a simple registration process.',
  },
  {
    title: 'Step 2: Orientation & Class Begin',
    desc: 'Attend orientation and start your instructor-led classes as per the course plan.',
  },
  {
    title: 'Step 3: Practical Training',
    desc: 'Engage in hands-on sessions, labs, and real-world projects to gain practical skills.',
  },
  {
    title: 'Step 4: Internal Assessment',
    desc: 'Appear for assignments, quizzes, and tests to assess your learning progress.',
  },
  {
    title: 'Step 5: Final Exam & Certification',
    desc: 'Clear the final assessment to earn a recognized certificate for your skills.',
  },
  {
    title: 'Step 6: Placement Assistance',
    desc: 'Get placement support including resume building, mock interviews, and job referrals.',
  },
];

export default function CurriculumSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block pb-3 border-b-4 border-red-600">
          Your Learning Pathway
        </h2>
        <p className="text-gray-500 mt-4 text-sm md:text-base">
          Navigate through our structured steps designed to boost your skills and career.
        </p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-0 w-1 h-full bg-red-500 rounded-full"></div>

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-16 mb-12"
          >
            <div className="absolute left-0 top-1 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-md">
              {index + 1}
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-red-700 font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
