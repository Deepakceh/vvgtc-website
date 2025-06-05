"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Fashion Designer",
    image: "/assets/images/courses/fashion_designer.webp",
    description: "Explore the world of style and modern design with expert-led training in fashion."
  },
  {
    title: "General Duty Assistant",
    image: "/assets/images/courses/gen_duty_assistant.webp",
    description: "Learn to assist patients and support healthcare staff in clinical settings."
  },
  {
    title: "Software Analytics",
    image: "/assets/images/courses/software.jpg",
    description: "Understand system performance, code quality, and software debugging techniques."
  },
  {
    title: "Traditional Hand Embroidery",
    image: "/assets/images/courses/hand_emb.jpg",
    description: "Master the art of thread and needle in traditional Indian embroidery styles."
  },
];

export default function CourseSection() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-sky-700">Our Courses</h2>
          <p className="text-gray-600 mt-2">Explore skill-based training courses tailored for your career goals.</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-sky-400 border transition duration-300 group"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-sky-700 mb-1">{course.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{course.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/courses"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-full transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
