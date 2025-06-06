'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection({ title, currentPage }) {
  const bgImage = '/assets/images/heroSection.jpg';

  return (
    <div
      className="relative w-full h-[200px] md:h-[220px] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-0" />

      {/* Content Box - bottom left */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute bottom-6 left-6 z-10 bg-white/90 border-l-4 border-red-600 px-5 py-4 rounded-md shadow-lg max-w-md"
      >
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-1 text-sm text-gray-600">
          <Link href="/" className="text-red-600 hover:underline font-medium">
            Home
          </Link>{' '}
          / <span className="capitalize">{currentPage}</span>
        </p>
      </motion.div>
    </div>
  );
}
