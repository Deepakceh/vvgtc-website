'use client';

import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative bg-[url('/assets/images/heroSection.jpg')] bg-cover bg-center h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering Youth,
          <br />
          Building the Future
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          "The power of youth is the common wealth for the entire world."
          <br />
          At <span className="text-red-400 font-semibold">VVGTC</span>, we nurture skills, foster confidence, and build tomorrow’s leaders.
        </p>

        <div className="mt-8 flex gap-4">
          <Link href="/about">
            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full font-semibold transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="border border-white hover:bg-white hover:text-black text-white py-3 px-6 rounded-full font-semibold transition">
              Join the Mission
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
