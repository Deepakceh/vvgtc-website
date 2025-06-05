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
    <section className="bg-white py-20 px-4 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 border-b-4 border-sky-600 inline-block pb-2">
          Step-by-Step Learning Journey
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-white hover:shadow-md transition-shadow duration-300 p-4 rounded-lg border border-gray-100"
          >
            <div className="bg-sky-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center shadow">
              {index + 1}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
