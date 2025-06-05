'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg">
          We are on a mission to empower every youth with quality education, practical skills, and career opportunities — because every dream deserves a chance to grow.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            icon: <GraduationCap size={32} />,
            title: 'Accessible Education',
            desc: 'Delivering industry-relevant education to students from all backgrounds, ensuring no one is left behind.',
          },
          {
            icon: <Briefcase size={32} />,
            title: 'Skill + Job Ready',
            desc: 'Focusing on practical, job-oriented training that prepares learners for real-world roles.',
          },
          {
            icon: <Users size={32} />,
            title: 'Youth Empowerment',
            desc: 'Creating confident, self-reliant individuals ready to lead and contribute to the economy.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-xl text-center"
          >
            <div className="text-sky-600 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
