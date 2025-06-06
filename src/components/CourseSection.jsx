'use client';

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
    <section className="bg-red-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-red-600">Explore Our Courses</h2>
          <p className="text-gray-700 mt-3 text-lg">
            A glimpse into our career-ready training programs.
          </p>
        </div>

        {/* Courses Horizontal Cards */}
        <div className="space-y-8">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row bg-white rounded-xl shadow hover:shadow-md border border-red-100 overflow-hidden transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full sm:w-56 h-56 sm:h-auto">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-red-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.slug || idx}`}
                  className="text-sm text-red-600 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <Link
            href="/courses"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
