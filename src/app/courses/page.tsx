"use client";
import HeroSection from '../../components/HeroSection'
import Image from "next/image";

const courses = [
    { title: "Fashion Designer", image: "/assets/images/courses/fashion_designer.webp", description: "Master the world of style, fabrics, and fashion industry design techniques." },
    { title: "Sampling Tailor", image: "/assets/images/courses/sampling_tailor.webp", description: "Learn how to stitch and cut fabric samples for custom production." },
    { title: "General Duty Assistant", image: "/assets/images/courses/gen_duty_assistant.webp", description: "Assist hospital staff and patients in basic healthcare tasks." },
    { title: "Emergency Care Associate", image: "/assets/images/courses/emergency_care.webp", description: "Get trained to handle critical care and emergency aid." },
    { title: "Data Entry Operator", image: "/assets/images/courses/data_entry.jpg", description: "Improve your typing speed and accuracy with real-time data tools." },
    { title: "Banking & Finance", image: "/assets/images/courses/banking.jpg", description: "Understand modern banking, investments, and risk management." },
    { title: "Microfinance Executive", image: "/assets/images/courses/finance.jpg", description: "Help communities with financial services and planning." },
    { title: "Solar PV Installer", image: "/assets/images/courses/solar.jpg", description: "Install sustainable solar energy systems professionally." },
    { title: "Accounts Assistant", image: "/assets/images/courses/account_ass.jpg", description: "Bookkeeping, invoices, and GST for small businesses." },
    { title: "Traditional Hand Embroidery", image: "/assets/images/courses/hand_emb.jpg", description: "Revive the beauty of traditional threadwork." },
    { title: "Bamboo Weavers", image: "/assets/images/courses/bamboo.jpg", description: "Craft eco-friendly products from bamboo with skill." },
    { title: "Software Analytics", image: "/assets/images/courses/software.jpg", description: "Analyze code quality, performance, and system behavior." },
];
export default function page() {
    return (
        <>
            <HeroSection title="Our Course's" currentPage="course" />
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Heading */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-red-600">Our Skill Courses</h2>
                        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                            Practical, job-ready training programs tailored for today’s workforce.
                        </p>
                    </div>

                    {/* Course List */}
                    <div className="space-y-6">
                        {courses.map((course, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col md:flex-row bg-red-50 hover:bg-white rounded-xl shadow-sm hover:shadow-md border border-red-100 transition duration-300 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="md:w-48 h-48 flex-shrink-0 relative">
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
                                    <p className="text-gray-700 text-sm">{course.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}