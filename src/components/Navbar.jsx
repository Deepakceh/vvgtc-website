'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/#projects' && pathname === '/') return true;
    return pathname === path;
  };

  const linkClass = (path) =>
    `relative transition-colors duration-300 pb-1 ${
      isActive(path)
        ? 'text-sky-600 font-semibold'
        : 'text-gray-700 hover:text-sky-600'
    } after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300`;

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group">
            <div className="relative flex items-center justify-center w-12 h-12">
              <Image
                src="/assets/images/logo.jpeg"
                alt="Sachin Eduskills Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative pl-3">
              <div className="absolute top-0 left-0 w-full h-full border-l-4 border-blue-500 rounded-sm -z-10 blur-sm"></div>
              <div className="text-sm leading-tight">
                <h1 className="text-xl font-black text-gray-800 group-hover:text-sky-600 transition">
                  Sachin Eduskills
                </h1>
                <span className="text-[11px] tracking-wide text-gray-500">
                  Innovating Education
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about" className={linkClass('/about')}>About</Link>
            <Link href="/projects" className={linkClass('/projects')}>Projects</Link>
            <Link href="/courses" className={linkClass('/courses')}>Courses</Link>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="hidden md:inline-block px-5 py-2 bg-sky-500 text-white rounded-full text-sm font-semibold hover:bg-sky-600 transition"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-gray-800"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-60 md:hidden"
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-[75%] bg-white h-full p-6 shadow-lg"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="text-xl font-bold mb-6"
              >
                <X />
              </button>
              <div className="flex flex-col gap-6 text-gray-800 text-base font-medium">
                <Link href="/" onClick={() => setMenuOpen(false)} className={linkClass('/')}>Home</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass('/about')}>About</Link>
                <Link href="/projects" onClick={() => setMenuOpen(false)} className={linkClass('/projects')}>Projects</Link>
                <Link href="/courses" onClick={() => setMenuOpen(false)} className={linkClass('/courses')}>Courses</Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-sky-500 text-white text-center py-2 rounded-full mt-4 hover:bg-sky-600 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
