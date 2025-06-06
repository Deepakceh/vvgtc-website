'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/assets/images/logo.jpg" alt="VVGTC" className="h-16 w-auto" />
          <span className="font-bold text-xl text-red-600">VVGTC</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link href="/" className="hover:text-red-600 transition">Home</Link>
          <Link href="/about" className="hover:text-red-600 transition">About</Link>
          <Link href="/courses" className="hover:text-red-600 transition">Courses</Link>
          <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          <Link href="/" className="block text-gray-700 hover:text-red-600">Home</Link>
          <Link href="/about" className="block text-gray-700 hover:text-red-600">About</Link>
          <Link href="/courses" className="block text-gray-700 hover:text-red-600">Courses</Link>
        </div>
      )}
    </header>
  );
}
