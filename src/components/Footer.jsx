'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* 1. Logo and Mission */}
        <div>
          <img
            src="/assets/images/logo.jpeg"
            alt="Logo"
            className="w-28 h-28 object-contain mx-auto md:mx-0 mb-4"
          />
          <p className="text-sm text-gray-400">
            Empowering youth through education, skills, and employment. Building futures with certified training and guidance.
          </p>
        </div>

        {/* 2. Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail size={18} className="text-sky-400" />
            <span>sachineduskills@yahoo.com</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone size={18} className="text-sky-400" />
            <span>0121-4352553</span>
          </div>
          <div className="flex items-start gap-2 text-gray-300">
            <MapPin size={18} className="text-sky-400 mt-1" />
            <span>
              C-86, Ganga Vatika, Ganga Nagar, Meerut, U.P. 250001
            </span>
          </div>
        </div>

        {/* 3. Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="/" className="hover:text-sky-400 transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-400 transition">About</Link></li>
            <li><Link href="/projects" className="hover:text-sky-400 transition">Projects</Link></li>
            <li><Link href="/courses" className="hover:text-sky-400 transition">Courses</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sachin Eduskills Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
