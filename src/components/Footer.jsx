'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-200 pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-800">

        {/* Section 1: Brand */}
        <div className="space-y-4">
          <img
            src="/assets/images/logo.jpg"
            alt="Sachin Eduskills Logo"
            className="w-24 h-24 object-contain"
          />
          <p className="text-sm text-gray-600">
            Driving employability through quality education and skill development. Transforming youth into industry-ready professionals.          </p>
        </div>

        {/* Section 2: Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-red-600 border-b-2 border-red-500 pb-1 w-fit">
            Get In Touch
          </h4>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <Mail className="text-red-500 mt-1" size={18} />
            <span>vvgtcpl@yahoo.com</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <Phone className="text-red-500 mt-1" size={18} />
            <span>8755776666</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-700">
            <MapPin className="text-red-500 mt-1" size={18} />
            <span>
              C-86, Ganga Vatika, Ganga Nagar, Meerut, U.P. 250001
            </span>
          </div>
        </div>

        {/* Section 3: Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold text-red-600 border-b-2 border-red-500 pb-1 w-fit">
            Quick Links
          </h4>
          <ul className="text-sm space-y-2 text-gray-700">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Courses', href: '/courses' },
              { name: 'Contact', href: '/contact' },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="hover:text-red-500 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 pt-5 border-t border-red-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} VVG Trading Company Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
